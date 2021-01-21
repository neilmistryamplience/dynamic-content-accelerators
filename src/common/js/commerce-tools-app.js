'use strict';

(function (exports) {
  var CT_AccessToken;
  var creds = '{CT_ID}:{CT_SECRET}';
  var creds64 = window.btoa(creds);
  var products;
  var dynamicProducts;

  function authenticateProductAPI(cb) {
    console.log('authenticating');
    $.ajax({
      url: '{CT_AUTH_URL}/oauth/token',
      method: 'POST',
      dataType: 'json',
      contentType: 'application/x-www-form-urlencoded',
      data: {
        grant_type: 'client_credentials',
        scope: '{CT_SCOPE}:{CT_PROJECT_KEY}',
      },
      cache: false,
      beforeSend: function (xhr) {
        /* Authorization header */
        xhr.setRequestHeader('Authorization', 'Basic ' + creds64);
      },
      success: function (data) {
        console.log('Success');
        console.log(data);
        CT_AccessToken = data.access_token;
        cb();
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log('error');
        console.log(jqXHR, textStatus, errorThrown);
      },
    });
  }

  function drawProducts() {
    products.forEach(function (item) {
      var productCode = item.getAttribute('data-amp-product-code');
      $.ajax({
        url:
          '{CT_API_URL}/{CT_PROJECT_KEY}/product-projections/' +
          productCode +
          '?localeProjection={CT_LOCALE}',
        method: 'GET',
        dataType: 'json',
        context: item,
        cache: false,
        beforeSend: function (xhr) {
          /* Authorization header */
          xhr.setRequestHeader('Authorization', 'Bearer ' + CT_AccessToken);
        },
        success: function (data) {
          console.log('Success');
          console.log(data);
          try {
            var link = "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/modanisa-poc/v1/templates/amp-template-pdp.html?productcode=" + data.masterVariant.sku;
            var image = data.masterVariant.images[0].url;
            var name = data.name['{CT_LOCALE}'];
            var priceObj = data.masterVariant.prices[0].value;
            var price =
              '&dollar;' +
              (priceObj.centAmount * 0.1).toFixed(priceObj.fractionDigits);

            var html =
              '<a class="o-dc-card card-bg  card2" href="' +
              link +
              '"><div class="amp-dc-card-wrap"><div class="o-dc-card-img"><picture class="amp-dc-image"><img loading="lazy" src="' +
              image +
              '?$product-list$" class="amp-dc-image-pic"/></picture></div><div class="o-dc-card-text"><h4 class="o-dc-card-title">' +
              name +
              '</h4><p class="o-dc-card-copy extra-padding-bottom">'+
              price +'</p><div class="cell large-shrink"><div class="o-dc-button small">Shop Now</div></div></div></div></a>';
            item.innerHTML = html;
          } catch (e) {
            console.log('Error with CommerceTools Product:' + productCode);
            var html =
              '<a class="amp-dc-card-wrap" href="#"><div class="amp-dc-card-wrap"><div class="amp-dc-card-img-wrap"><picture class="amp-dc-image"><img loading="lazy" src="https://i8.amplience.net/s/willow/noimagefound?$product-list$" class="amp-dc-image-pic"/></picture></div><div class="amp-dc-card-text-wrap"><div class="amp-dc-card-name">Product: ' +
              productCode +
              ' not found</div><p class="amp-dc-card-description">Please select another</p><div class="amp-dc-card-link"></div></div></a></div>';
            $(item).html(html);
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log('error');
          console.log(jqXHR, textStatus, errorThrown);
        },
      });
    });
  }

  function findProducts() {
    products = document.querySelectorAll('[data-amp-product-code]');
    if (products.length >= 1) authenticateProductAPI(drawProducts);

    dynamicProducts = document.querySelectorAll('[data-amp-product-search]');
    if (dynamicProducts.length >= 1)
      authenticateProductAPI(drawDynamicProducts);
  }

  exports.Utils = window.AmpCa.Utils || exports.Utils || {};
  exports.Utils.findProducts = findProducts;
  window.addEventListener('load', function () {
    findProducts();
  });
})((window.AmpCa = window.AmpCa || {}));
