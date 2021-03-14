'use strict';

var gulp = require('gulp');
var request = require('request');
var PluginError = require('plugin-error');
var fs = require('fs');
var config = require('./../.automation-credentials.json');

var DCAccessToken;
var registeredExtensions = [];
var localExtensions = [];

gulp.task('authenticate-dc', function (cb) {
  var payload =
    'grant_type=client_credentials' +
    '&client_id=' +
    encodeURIComponent(config.amplience['dynamic-content']['client-id']) +
    '&client_secret=' +
    encodeURIComponent(config.amplience['dynamic-content']['client-secret']);

  request.post(
    {
      url:
        config.amplience['dynamic-content']['auth-url'] +
        'oauth/token?' +
        payload,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
    function (error, response, body) {
      if (error || response.statusCode >= 400) {
        throw new PluginError({
          plugin: 'CH-auth',
          message: error,
        });
      }

      DCAccessToken = JSON.parse(body).access_token;
      cb();
    }
  );
});

gulp.task('get-existing-extensions', function (cb) {
    if(localExtensions.length < 1){
        console.log("No local extensions to add: Exiting")
        cb();
        return;
    }
  request.get(
    {
      url:
        config.amplience['dynamic-content']['api-url'] +
        '/hubs/' +
        config.amplience['dynamic-content']['dc-hub-id'] +
        '/extensions',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + DCAccessToken.toString(),
      },
    },
    function (error, response, body) {
      var parsedBody = JSON.parse(body);

      if (error || parsedBody.error) {
        throw new PluginError({
          plugin: 'DC-set-settings',
          message: parsedBody.error || error,
        });
      }
      if(parsedBody && parsedBody._embedded && parsedBody._embedded.extensions ){
        registeredExtensions = parsedBody._embedded.extensions;
      }
      
      cb();
    }
  );
});

gulp.task('get-local-extensions', function (cb) {
  
  const extensionsfolder = './dist/extensions/';
  console.log('Getting Files from : ' + extensionsfolder);
  
  var getLocalExtensionFiles = function (dir, result) {
    fs.readdir(dir, function (err, files) {
      files.forEach((file, index) => {
        console.log('Getting file:' + file);
        fs.readFile(extensionsfolder + file, 'utf-8', function (err, content) {
          if (err) {
            onError(err);
            return;
          }
          var extSchema = JSON.parse(content);
          console.log(
            'Found Extension ' +
              (index + 1) +
              ' of ' +
              files.length +
              ': ' +
              extSchema.name +
              ', adding to list'
          );
          var temp = { name: extSchema.name, data: extSchema };
          localExtensions.push(temp);
          if (index >= files.length - 1) {
            result();
          }
        });
      });
    });
  };

  getLocalExtensionFiles(extensionsfolder, function (items) {
    console.log('Found ' + localExtensions.length + ' localExtensions');
    cb();
  });

  
});

gulp.task('deploy-extensions-dc', function (cb) {
    if(localExtensions.length < 1){
        console.log("No local extensions to Deploy: Exiting")
        cb();
        return;
    }

    localExtensions.forEach((extension, index) => {
        console.log("Checking: " + extension.name);

        // check if the extension already exists
        var match = registeredExtensions.find(
          (item) => item.name == extension.name
        );
        //console.log('Match? :' + JSON.stringify(match));
        if (match) {
          // Need to do a patch with existing ID's

          var mergedJSON = extension.data;
          mergedJSON.id = match.id;
          mergedJSON.hubId = match.hubId;
          request.patch(
            {
              url:
              config.amplience["dynamic-content"]['api-url'] 
              + '/extensions/' +
             match['id'],

              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + DCAccessToken.toString(),
              },
              json: mergedJSON,
            },
            function (error, response, body) {
              if (error) {
                throw new PluginError({
                  plugin: 'DC-patch-extension',
                  message: error,
                });
              }
              console.log(body);
              console.log(config.amplience["dynamic-content"]['api-url'] +
              '/hubs/' +
              config.amplience["dynamic-content"]['dc-hub-id'] +
              '/extensions/' +
              match['id'])
              console.log(JSON.stringify(mergedJSON));
              //console.log(error);
              //console.log(response)
              console.log('i have patched the Extension');
            }
          );
        } else {
          // Need to do a POST
          request.post(
            {
              url:
              config.amplience["dynamic-content"]['api-url'] +
              '/hubs/' +
              config.amplience["dynamic-content"]['dc-hub-id'] +
                '/extensions',

              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + DCAccessToken.toString(),
              },
              json: extension.data,
            },
            function (error, response, body) {
              if (error) {
                throw new PluginError({
                  plugin: 'DC-create-extension',
                  message: error,
                });
              }
              console.log(body);
              console.log('i have created the Extension');
            }
          );
        }
    })
    cb();
});

gulp.task(
  'automate-extensions',
  gulp.series('authenticate-dc', 'get-local-extensions','get-existing-extensions', 'deploy-extensions-dc'),
  function (cb) {
    cb();
  }
);
