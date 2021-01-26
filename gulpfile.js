'use strict';

var es = require('event-stream');
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var requireDir = require('require-dir');
requireDir('./gulp-tasks');

var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var del = require('del');
var concat = require('gulp-concat');
var insert = require('gulp-insert');
var addSrc = require('gulp-add-src');
var connect = require('gulp-connect');
var flatten = require('gulp-flatten');
var cleanCSS = require('gulp-clean-css');
var jsonFormat = require('gulp-json-format');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var babel = require('gulp-babel');

var toReplace = require('./.replace.json');
var config = require('./.automation-credentials.json');

var replace = function () {
  return es.map(function (file, cb) {
    var fileContent = file.contents.toString();

    // Amplience
    fileContent = fileContent.replace(/\{BASEPATH\}/g, toReplace.BASEPATH);
    fileContent = fileContent.replace(/\{COMPANY_TAG\}/g, toReplace.COMPANY_TAG);
    fileContent = fileContent.replace(/\{CONTENT_TYPE_BASEPATH\}/g, toReplace.BASEPATH);
    fileContent = fileContent.replace(/\{DEPLOY_PATH\}/g, config.s3.domain + config.s3.uploadpath);
    fileContent = fileContent.replace(/\{CONTENT_REPOSITORIES\}/g, JSON.stringify(toReplace.CONTENT_REPOSITORIES));
    fileContent = fileContent.replace(/\{SLOT_REPOSITORIES\}/g, JSON.stringify(toReplace.SLOT_REPOSITORIES));
    // Algolia
    fileContent = fileContent.replace(/\{ALGOLIA_ID\}/g, config.algolia["application-id"]);
    fileContent = fileContent.replace(/\{ALGOLIA_SECRET\}/g, config.algolia["application-secret"]);

    // Comemrcetools
    fileContent = fileContent.replace(/\{CT_API_URL\}/g, config.commercetools.apiURL);
    fileContent = fileContent.replace(/\{CT_AUTH_URL\}/g, config.commercetools.authURL);
    fileContent = fileContent.replace(/\{CT_PROJECT_KEY\}/g, config.commercetools.projectKey);
    fileContent = fileContent.replace(/\{CT_ID\}/g, config.commercetools.clientID);
    fileContent = fileContent.replace(/\{CT_SECRET\}/g, config.commercetools.clientSecret);
    fileContent = fileContent.replace(/\{CT_SCOPE\}/g, config.commercetools.scope);
    fileContent = fileContent.replace(/\{CT_LOCALE\}/g, config.commercetools.locale);

    file.contents = new Buffer.from(fileContent);
    // send the updated file down the pipe
    cb(null, file);
  });
};

var globalVisualizations = toReplace.VISUALIZATIONS;
var globalVisualizationsString = '';
if (globalVisualizations && globalVisualizations.length >= 1) {
  for (var i in globalVisualizations) {
    globalVisualizationsString += JSON.stringify(globalVisualizations[i]) + ',';
  }
  globalVisualizationsString = globalVisualizationsString.substring(
    0,
    globalVisualizationsString.length - 1
  );
}

/* Checks in the configuration for global visualisations, if they exists adds them as an object whilst allowing additions */
var replaceVisualizations = function () {
  return es.map(function (file, cb) {
    if (globalVisualizationsString == '') {
      cb(null, file);
      return;
    }
    var fileContent = file.contents.toString();
    fileContent = fileContent.replace(/\{VISUALIZATIONS\}/g, globalVisualizationsString);
    file.contents = new Buffer.from(fileContent);
    // send the updated file down the pipe
    cb(null, file);
  });
};

gulp.task('del', function () {
  return del('dist');
});

gulp.task('copy-icons', function () {
  return gulp
    .src(['src/**/icons/*.icon.png', 'src/**/icons/*.icon.jpg'])
    .pipe(flatten())
    .pipe(gulp.dest('dist/icons'));
});

gulp.task('copy-templates', function () {
  return gulp
    .src(['src/*/templates/*.html'])
    .pipe(replace())
    .pipe(flatten())
    .pipe(gulp.dest('dist/templates'));
});

gulp.task('build-templates', function () {
  return gulp
    .src('dist/templates/*.html')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(
      declare({
        namespace: 'HBTemplates',
        noRedeclare: true,
      })
    )
    .pipe(uglify())
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy-local-content-schemas', function () {
  return gulp
    .src(['src/*/content-schemas/*.json'])
    .pipe(replace())
    .pipe(flatten())
    .pipe(gulp.dest('dist/content-schemas'));
});

gulp.task('copy-local-content-types', function () {
  return gulp
    .src(['src/*/content-types/*.json'])
    .pipe(replace())
    .pipe(replaceVisualizations())
    .pipe(flatten())
    .pipe(jsonFormat('\t'))
    .pipe(gulp.dest('dist/content-types'));
});

gulp.task('copy-local-content-type-schemas', function () {
  return gulp
    .src(['src/*/content-type-schemas/*.json'])
    .pipe(replace())
    .pipe(flatten())
    .pipe(gulp.dest('dist/content-type-schemas'));
});

gulp.task('copy-local-extensions', function () {
  return gulp
    .src(['extensions/*.json'])
    .pipe(replace())
    .pipe(flatten())
    .pipe(gulp.dest('dist/extensions'));
});

gulp.task('copy-node-modules', function () {
  return gulp
    .src(['node_modules/lory.js/dist/lory.min.js'])
    .pipe(gulp.dest('dist'));
});

gulp.task('addLoryLicense', function () {
  return gulp
    .src('node_modules/lory.js/LICENSE')
    .pipe(insert.prepend('/*'))
    .pipe(insert.append('*/'))
    .pipe(addSrc.append('dist/lory.min.js'))
    .pipe(concat('lory.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('build-js', function () {
  return gulp
    .src([
      'src/**/*.js',
      'node_modules/poi-js-lib/dist/poi-lib.min.js',
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/@popperjs/core/dist/umd/popper.min.js',
      '!**/stories/*.stories.js',
    ])
    .pipe(concat('utils.js'))
    .pipe(replace())
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-js', function () {
  return gulp
    .src(['dist/utils.js'])
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    //.pipe(uglify())
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(gulp.dest('dist'));
});

gulp.task('build-css', function () {
  return gulp
    .src([
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'src/**/css/*.css',
      'src/**/css/*.scss',
      '!src/cardsPreview/css/cardsPreview.scss',
      '!src/cardsPreview/css/localCardsStyles.scss',
    ])
    .pipe(
      sass({
        outputStyle: 'expanded',
      }).on('error', sass.logError)
    )
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
      })
    )
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('build-cards-css', function () {
  return gulp
    .src(['src/cardsPreview/css/cardsPreview.scss'])
    .pipe(
      sass({
        outputStyle: 'expanded',
      }).on('error', sass.logError)
    )
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
      })
    )
    .pipe(concat('cardsStyles.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', function () {
  return gulp
    .src(['dist/styles.css', 'dist/cardsStyles.css'])
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(gulp.dest('dist'));
});

gulp.task(
  'build',
  gulp.series(
    'del',
    'copy-node-modules',
    'copy-icons',
    'copy-templates',
    'copy-local-extensions',
    'copy-local-content-schemas',
    'copy-local-content-types',
    'copy-local-content-type-schemas',
    'addLoryLicense',
    'build-js',
    'minify-js',
    'build-cards-css',
    'build-css',
    'minify-css'
  ),
  function () {}
);

gulp.task('deploy-content-types', gulp.series('automate-dynamic-content'), function () {});
gulp.task(
  'deploy-renders-to-ch',
  gulp.series(
    'authenticate-content-hub',
    'upload-local-render-templates-to-ch-and-publish'
  ),
  function () {}
);

gulp.task('deploy-to-s3', gulp.series('upload-build-to-s3'), function () {});

gulp.task(
  'buildAndDeploy',
  gulp.series(
    'build',
    'deploy-content-types',
    'deploy-renders-to-ch',
    'deploy-to-s3'
  ),
  function () {}
);

gulp.task('deploy-extensions', gulp.series('automate-extensions'), function () {});

gulp.task('buildAllWithoutReload', gulp.series('build'));

gulp.task('buildAll', gulp.series('buildAllWithoutReload'), function () {
  return gulp.src('*').pipe(connect.reload());
});

gulp.task('server', function (done) {
  connect.server({
    port: 9100,
    hostname: '0.0.0.0',
    livereload: true,
    debug: true,
  });
  done();
});

gulp.task('buildAllMin', gulp.series('build', 'server'), function () {
  return gulp.src('*').pipe(connect.reload());
});

gulp.task('watch', function (done) {
  gulp.watch('src/**/*', gulp.series(['buildAll']));
  done();
});

gulp.task('default', gulp.series('buildAll', gulp.parallel('watch', 'server')));
