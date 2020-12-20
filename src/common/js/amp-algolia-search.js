'use strict';

(function (exports) {
  function findSearches() {
    // Check if there are any attributes on the page that require searches
    var searchElements = document.querySelectorAll('[data-amp-dc-indexname]');
    if (searchElements && searchElements.length > 0) {
      // We have an item we should now trigger the search SDK.
      var searchClient = algoliasearch('{ALGOLIA_ID}', '{ALGOLIA_SECRET}');

      searchElements.forEach(function (item) {
        var indexName = item.getAttribute('data-amp-dc-indexname');
        var max = item.getAttribute('data-amp-dc-numItems');
        var query = item.getAttribute('data-amp-dc-query');
        item.innerHTML="";

        var index = searchClient.initIndex(indexName);
        var searchSettings = {
          hitsPerPage: max,
        };

        index.search(query, searchSettings).then(({ hits }) => {
          console.log('QUERY RESPONSE:');
          console.log(hits);
          console.log(item);

          hits.forEach(function (hit){
            var newNode = document.createElement('div');
            var link = 'https://anyafinn-blog-sfcceu.netlify.app/blog/' + hit._meta.deliveryKey;
            var image = '//' + hit.image.image.defaultHost + '/i/' + hit.image.image.endpoint + '/' + hit.image.image.name + '?&sm=c&h=140&w=414&scaleFit=poi&poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}';

            var html =
                '<div class="cell medium-6 large-3 o-dc-card2-slider-item" ><a class="o-dc-card card-bg  card2" href="' +
                link +
                '"><div class="amp-dc-card-wrap"><div class="o-dc-card-img"><picture class="amp-dc-image"><img loading="lazy" src="' +
                image +
                '?$product-list$" class="amp-dc-image-pic"/></picture></div><div class="o-dc-card-text"><h4 class="o-dc-card-title">' +
                hit.title +
                '</h4><p class="o-dc-card-copy extra-padding-bottom">' +
                hit.description +
                '</p><div class="cell large-shrink"><div class="o-dc-button small">READ NOW</div></div></div></div></a></div>';
              newNode.innerHTML = html;

            //newNode.innerHTML = '<div class="amp-dc-blog-item"><a href="https://anyafinn-blog-sfcceu.netlify.app/blog/' + hit._meta.deliveryKey + '"><img loading="lazy" class="amp-dc-blog-image" src="//' + hit.image.image.defaultHost + '/i/' + hit.image.image.endpoint + '/' + hit.image.image.name + '?&sm=c&h=140&w=414&scaleFit=poi&poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}" alt="' + hit.image.altText + '"> <h1 class="amp-dc-blog-title">' + hit.title + '</h1><div class="amp-dc-blog-description">' + hit.description + '</div></a></div>'
            item.appendChild(newNode)
          })
        });
      });
    }
  }

  exports.Utils = window.AmpCa.Utils || exports.Utils || {};
  exports.Utils.findSearches = findSearches;

  window.addEventListener('load', function () {
    findSearches();
  });
})
(
  window.AmpCa = window.AmpCa || {}
);
