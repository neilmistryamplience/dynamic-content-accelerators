'use strict';

(function (exports) {
  var getUrlParameter = function getUrlParameter(sParam, sDefault) {
    var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined
          ? true
          : decodeURIComponent(sParameterName[1]);
      }
    }
    if (sDefault) return sDefault;
  };

  var vse = getUrlParameter('vse', 'modanisapoc.cdn.content.amplience.net');
  var crsvse = getUrlParameter('vse', 'c1-orig.adis.ws');
  // Removed as we will get this from the DIV attributes
  /*
  var key = getUrlParameter('key', 'web/home');
  var menukey = getUrlParameter('menukey', 'web/navigation');
  */
  var mainContentKey = getUrlParameter('key', '');
  var locale = getUrlParameter('locale', 'en-GB,en-*,*');
  var cid = getUrlParameter('cid');
  var timestamp = getUrlParameter('timestamp');
  var segmentParam = getUrlParameter('segment');
  var hidemenu = getUrlParameter('hidemenu', 'false');
  hidemenu = hidemenu == 'true' ? true : false;
  var isRenderService = getUrlParameter('template');

  if( isRenderService){
    exports.Utils = window.AmpCa.Utils || exports.Utils || {};
    exports.Utils.evaluateAmplienceLink = evaluateAmplienceLink;
    exports.Utils.getUrlParameter = getUrlParameter;
    return;
  }
  function loadDynamicSlots(){
    var keyslots = document.querySelectorAll('[data-amp-deliverykey]');
    var idslots = document.querySelectorAll('[data-amp-deliveryid]');

    // what if there is already a key in the URL??
    


    keyslots.forEach(function (item) {
      var dynamickey = item.getAttribute('data-amp-deliverykey');
      var eID = item.id;
      if(item.getAttribute('data-amp-maincontent') == "true" ){
        if (mainContentKey && mainContentKey != ''){
          dynamickey = mainContentKey;
        } 
      }
      loadContent(dynamickey, eID, 'key');
      
    })
    idslots.forEach(function (item) {
      var dynamicid = item.getAttribute('data-amp-deliveryid');
      var eID = item.id;
      loadContent(dynamicid, eID, 'id');
    })
  }

  function drawDebug(){
    loadDynamicSlots();

    var debugContainer = document.getElementById('amp-debug-container');
    debugContainer.innerHTML = "";

    var localesString = '';
    localesString += '<option value="en-TR">en-TR</option>';
    localesString += '<option value="tr-TR">tr-TR</option>';
    localesString += '<option value="en-AE">en-AE</option>';
    localesString += '<option value="tr-AE">tr-AE</option>';
    localesString += '<option value="ar-AE">ar-AE</option>';
    debugContainer.innerHTML += '<select name="locales" id="locales">' + localesString + '</select>';

    console.log(document.getElementById('locales'))
    document.getElementById('locales').addEventListener("change", function(change){
      console.log(change.target.value);
      var newLocale = change.target.value + ',en-*,*';

      var currenturl = window.location.href;
      if (currenturl.indexOf('&locale=') >= 0) {
        var urlarr = currenturl.split('&');
        for (var i = 0; i < urlarr.length; i++) {
          var line = urlarr[i];
          if (line.indexOf('locale=') == 0) {
            urlarr[i] = 'locale=' + newLocale;
          }
        }
        var newurl = urlarr.join('&');
        window.open(newurl, '_self');
      } else {
        if (currenturl.indexOf('?') >= 0) {
          window.open(currenturl + '&locale=' + newLocale, '_self');
        } else {
          window.open(currenturl + '?locale=' + newLocale, '_self');
        }
      }

    });


    if(timestamp){
      console.log("Timestamp:" + timestamp)
      var displayDate = new Date(Number(timestamp))
      console.log(displayDate)
      
      if( debugContainer){
        //debugContainer.innerHTML += '<span>Currently Viewing: ' + displayDate + '</span>';
      }

      /*$.ajax({
        url:
        'https://presalesadisws.s3.eu-west-1.amazonaws.com/ui-extensions/data-extension/segments.json',
        method: 'GET',
        dataType: 'json',
        cache: false,
        success: function (data) {
          console.log(data)


          var optionsString = '<option value="" disabled selected>Select your segment</option>';
          if(segmentParam) optionsString = '<option value="">No segment</option>';
          for(var i in data.items){
            var optionval = data.items[i].name;
            if( segmentParam == optionval){
              optionsString += '<option value="' + optionval + '" disabled selected>' + optionval + '</option>'
            } else{
              optionsString += '<option value="' + optionval + '">' + optionval + '</option>'
            }
            
          }

          


          debugContainer.innerHTML += '<select name="segments" id="segments">' + optionsString + '</select>';

          

          document.getElementById('segments').addEventListener("change", function(change){
            console.log(change.target.value);
            var newSegment = change.target.value;

            var currenturl = window.location.href;
            if (currenturl.indexOf('&segment=') >= 0) {
              var urlarr = currenturl.split('&');
              for (var i = 0; i < urlarr.length; i++) {
                var line = urlarr[i];
                if (line.indexOf('segment=') == 0) {
                  urlarr[i] = 'segment=' + newSegment;
                }
              }
              var newurl = urlarr.join('&');
              window.open(newurl, '_self');
            } else {
              if (currenturl.indexOf('?') >= 0) {
                window.open(currenturl + '&segment=' + newSegment, '_self');
              } else {
                window.open(currenturl + '?segment=' + newSegment, '_self');
              }
            }

          });

        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log('error');
          console.log(jqXHR, textStatus, errorThrown);
        }
      });*/
    }
  }

  /** Init the SDK */

  var AmpSDKObj = {
    hubName: '{COMPANY_TAG}',
    stagingEnvironment: vse,
    locale: locale,
  };

  var AmpSDKObjCRS = {
    account: '{COMPANY_TAG}',
    stagingEnvironment: crsvse,
    locale: locale,
  };

  var clientV1 = new ampDynamicContent.ContentClient(AmpSDKObjCRS);
  var clientV2 = new ampDynamicContent.ContentClient(AmpSDKObj);

  function handleLoadedContent(container, content){
    console.log(content.body);
        var renderID  = content.body._meta.deliveryId;
        if(content && content.body){
          var schema = content.body._meta.schema;
          if(schema === 'https://amplience.com/composablecommerce/personalized-slot.json'){
            // check segments
            if(segmentParam){
              // We should check for a match
              var indexOfMatch = content.body.segments.findIndex(x => x.segment === segmentParam);
              if(indexOfMatch >= 0){
                renderID = content.body.segments[indexOfMatch].content._meta.deliveryId;
              }else{
                // no match - pick the first
                renderID = content.body.segments[0].content._meta.deliveryId;
              }
            } else {
              // Need to find a way to get the no segment option....
              renderID = content.body.segments[0].content._meta.deliveryId;
            }
          }
        }

        /** */
        clientV1
          .renderContentItem(renderID,'amp-template-templateChooser')
          .then(response => {
            console.log(response.body);
            document.getElementById(container).innerHTML = response.body;

            // remove loader
            var loader = document.getElementById('amp-content-loader')
            if (loader){
              loader.style.display = 'none';
            }

            AmpCa.Utils.attachComponents()
            AmpCa.Utils.findSearches()
            AmpCa.Utils.findProducts()

          })
          .catch(error => {
            console.log('unable to find content', error);
          });

  }
  

  function loadContent(key, container, method) {
    console.log('asked to load!', key);
    if( method == 'id'){
      clientV2
      .getContentItemById(key)
      .then((content) => {
        handleLoadedContent(container, content);
      })
      .catch((error) => {
        console.log('content not found', error);
      });
    } else {
      clientV2
      .getContentItemByKey(key)
      .then((content) => {
        handleLoadedContent(container, content);
      })
      .catch((error) => {
        console.log('content not found', error);
      });
    }
  }

  // Removed as we will load by data attributes on DIVs
  /*
  loadContent(menukey, 'amp-menu-holder');
  loadContent(key, 'amp-page-content-holder');
  */

  function evaluateAmplienceLink(lnk) {
    console.log('link clicked = ' + lnk);
    if (lnk.indexOf('https://') >= 0) {
      // check if there are any paramaters
      var currenturl = window.location.href;
      
      if(timestamp){
        lnk = lnk.replace("{{vse.domain}}", vse);
        lnk = lnk.replace("{{locales}}", locale);
        lnk = lnk.replace("{{timestamp}}", timestamp);

        if (currenturl.indexOf('&key=') >= 0) {
          var urlarr = currenturl.split('&');
          for (var i = 0; i < urlarr.length; i++) {
            var line = urlarr[i];
            if (line.indexOf('key=') == 0) {
              lnk += '&' + line;
            }
          }
        }
        window.open(lnk, '_self');
      }else{
        // We want the key and the locales....
        //Gey the key!
        var newkey;
        if (lnk.indexOf('&key=') >= 0) {
          var urlarr = lnk.split('&');
          for (var i = 0; i < urlarr.length; i++) {
            var line = urlarr[i];
            if (line.indexOf('key=') == 0) {
              newkey = '&' + line
            }
          }
        }

        var n = lnk.indexOf('?');
        lnk = lnk.substring(0, n != -1 ? n : lnk.length);

        // Need to add in locales
        lnk+='?locale=' + locale;
        if(newkey){
          lnk += newkey;
        }
        window.open(lnk, '_self');
        
      }
      
    } else {
      var currenturl = window.location.href;
      if (currenturl.indexOf('&key=') >= 0) {
        // Replace the key
        var urlarr = currenturl.split('&');

        for (var i = 0; i < urlarr.length; i++) {
          var line = urlarr[i];
          if (line.indexOf('key=') == 0) {
            urlarr[i] = 'key=' + lnk;
          }
        }
        var newurl = urlarr.join('&');
        window.open(newurl, '_self');
      } else {
        if (currenturl.indexOf('?') >= 0) {
          window.open(currenturl + '&key=' + lnk, '_self');
        } else {
          window.open(currenturl + '?key=' + lnk, '_self');
        }
      }
    }
  }
  exports.Utils = window.AmpCa.Utils || exports.Utils || {};
  exports.Utils.evaluateAmplienceLink = evaluateAmplienceLink;
  exports.Utils.getUrlParameter = getUrlParameter;

  window.addEventListener('load', function () {
    // Need to put in here to not draw debug if visualising
    drawDebug();
  });
})
(
  window.AmpCa = window.AmpCa || {}
);
