import {
  storiesOf
} from '@storybook/html';

import {
  renderContent
} from '../../../.storybook/rendering-service';

import sliderStyles from '../css/slider.scss';

export const sampleContent = {
  "content": {
    "_meta": {
      "name": "Example - Slider",
      "schema": "https://amplience.com/composablecommerce/slider.json",
      "deliveryId": "4545e024-cba7-4aa6-8a03-6d746377d837"
    },
    "slides": [
      {
        "_meta": {
          "name": "Example Advanced Banner",
          "schema": "https://amplience.com/composablecommerce/advanced-banner.json",
          "deliveryId": "1b53d178-db0e-43c5-b0e8-615b83c57f3c"
        },
        "bannerImage": {
          "imageholder": {
            "image": {
              "crop": [
                0,
                0,
                0,
                0
              ],
              "rot": 0,
              "hue": 0,
              "sat": 0,
              "bri": 0,
              "fliph": false,
              "flipv": false,
              "poi": {
                "x": 0.2131979695431472,
                "y": 0.1852791878172589
              },
              "aspectLock": "poi",
              "image": {
                "_meta": {
                  "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                },
                "id": "6a8f2303-f992-49df-96ed-b44e82bac6d3",
                "name": "banner-text-top-right-2-1-large-desktop",
                "endpoint": "dem",
                "defaultHost": "1qsp9jqe0mztt1m86vvc1muff6.staging.bigcontent.io"
              },
              "query": "poi=0.2132,0.1853,0,0&scaleFit=poi"
            }
          },
          "gifImage": false,
          "togglePOI": false,
          "hotspots": false,
          "component": "Image",
          "_meta": {
            "schema": "https://amplience.com/composablecommerce/image.json"
          }
        },
        "header": {
          "text": "Handbag Sale",
          "style": "white"
        },
        "countdown": {
          "counter": "2021-01-28T16:18:57.951Z",
          "style": "white",
          "fontSize": "large",
          "fontWeight": "normal"
        },
        "hideMobileText": false,
        "button": {
          "buttonLabel": "Shop Now",
          "buttonLink": "www.amplience.com",
          "_meta": {
            "schema": "https://amplience.com/composablecommerce/advanced-button.json"
          }
        },
        "hasVideo": false,
        "video": {
          "backgroundFullScreen": false,
          "backgroundEffect": false,
          "component": "Video",
          "_meta": {
            "schema": "https://amplience.com/composablecommerce/video.json"
          }
        },
        "showVideoTitle": false,
        "textPositionHorizontal": "right",
        "textPositionVertical": "middle",
        "backgroundGradient": "right",
        "textPositionHorizontalMobile": "center",
        "textPositionVerticalMobile": "middle"
      },
      {
        "_meta": {
          "name": "Example Advanced Banner",
          "schema": "https://amplience.com/composablecommerce/advanced-banner.json",
          "deliveryId": "7a07c61a-36ea-4f54-b3df-a9123d11ee9d"
        },
        "bannerImage": {
          "imageholder": {
            "image": {
              "crop": [
                0,
                0,
                0,
                0
              ],
              "rot": 0,
              "hue": 0,
              "sat": 0,
              "bri": 0,
              "fliph": false,
              "flipv": false,
              "poi": {
                "x": 0.2131979695431472,
                "y": 0.1852791878172589
              },
              "aspectLock": "poi",
              "image": {
                "_meta": {
                  "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                },
                "id": "6a8f2303-f992-49df-96ed-b44e82bac6d3",
                "name": "banner-text-top-right-2-1-large-desktop",
                "endpoint": "dem",
                "defaultHost": "1qsp9jqe0mztt1m86vvc1muff6.staging.bigcontent.io"
              },
              "query": "poi=0.2132,0.1853,0,0&scaleFit=poi"
            }
          },
          "gifImage": false,
          "togglePOI": false,
          "hotspots": false,
          "component": "Image",
          "_meta": {
            "schema": "https://amplience.com/composablecommerce/image.json"
          }
        },
        "header": {
          "text": "Handbag Sale",
          "fontColor": "rgb(255, 255, 255)",
          "fontWeight": "bold",
          "style": "flashing"
        },
        "subheader": {
          "fontColor": "rgb(255, 255, 255)"
        },
        "hideMobileText": false,
        "button": {
          "buttonLabel": "Shop Now",
          "buttonLink": "www.amplience.com",
          "_meta": {
            "schema": "https://amplience.com/composablecommerce/advanced-button.json"
          }
        },
        "hasVideo": false,
        "video": {
          "backgroundFullScreen": false,
          "backgroundEffect": false,
          "component": "Video",
          "_meta": {
            "schema": "https://amplience.com/composablecommerce/video.json"
          }
        },
        "showVideoTitle": false,
        "textPositionHorizontal": "right",
        "textPositionVertical": "middle",
        "backgroundGradient": "right",
        "textPositionHorizontalMobile": "center",
        "textPositionVerticalMobile": "middle"
      },
      {
        "_meta": {
          "name": "Advanced Banner - Knitwear flash sale",
          "schema": "https://amplience.com/composablecommerce/advanced-banner.json",
          "deliveryId": "a44beea1-4bb3-4312-bc46-5a48a340b36f"
        },
        "bannerImage": {
          "imageholder": {
            "image": {
              "crop": [
                0,
                0,
                0,
                0
              ],
              "rot": 0,
              "hue": 0,
              "sat": 0,
              "bri": 0,
              "fliph": false,
              "flipv": false,
              "poi": {
                "x": -1,
                "y": -1
              },
              "aspectLock": "clear",
              "image": {
                "_meta": {
                  "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                },
                "id": "6f652257-e8a5-4c99-81f1-fdd5ac7246aa",
                "name": "KNITWEAR_DESK_2201",
                "endpoint": "dem",
                "defaultHost": "1qsp9jqe0mztt1m86vvc1muff6.staging.bigcontent.io"
              }
            }
          },
          "gifImage": false,
          "togglePOI": true,
          "hotspots": false,
          "component": "Image",
          "imageAltText": "Knitwear sale",
          "_meta": {
            "schema": "https://amplience.com/composablecommerce/image.json"
          }
        },
        "hideMobileText": false,
        "button": {
          "buttonLabel": "Shop Now >",
          "buttonLink": "https://www.boohoo.com/womens/promo/flash-sale-7?home_flash-sale-7",
          "buttonStyle": "white",
          "_meta": {
            "schema": "https://amplience.com/composablecommerce/advanced-button.json"
          },
          "buttonBackgroundColour": "#85dce6",
          "buttonForegroundColour": "rgb(255, 255, 255)",
          "buttonFontWeight": "bold"
        },
        "hasVideo": false,
        "video": {
          "backgroundFullScreen": false,
          "backgroundEffect": false,
          "component": "Video",
          "_meta": {
            "schema": "https://amplience.com/composablecommerce/video.json"
          }
        },
        "showVideoTitle": false,
        "textPositionHorizontal": "center",
        "textPositionVertical": "bottom",
        "textPositionVerticalMobile": "bottom",
        "textPositionHorizontalMobile": "right"
      },
      {
        "_meta": {
          "name": "Advanced Banner - Transcend New Season",
          "schema": "https://amplience.com/composablecommerce/advanced-banner.json",
          "deliveryId": "a9e07ade-524a-47a2-bdd0-d1f23be0b12a"
        },
        "bannerImage": {
          "imageholder": {
            "image": {
              "crop": [
                0,
                0,
                0,
                0
              ],
              "rot": 0,
              "hue": 0,
              "sat": 0,
              "bri": 0,
              "fliph": false,
              "flipv": false,
              "poi": {
                "x": -1,
                "y": -1
              },
              "aspectLock": "clear",
              "image": {
                "_meta": {
                  "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                },
                "id": "9a1922a3-843e-465d-b7df-ba22fa2e3cab",
                "name": "1901_MAIN_SPLASH_TRANSCEND_DESKTOP_EN",
                "endpoint": "dem",
                "defaultHost": "1qsp9jqe0mztt1m86vvc1muff6.staging.bigcontent.io"
              }
            }
          },
          "gifImage": false,
          "togglePOI": true,
          "hotspots": false,
          "component": "Image",
          "imageAltText": "New Season",
          "_meta": {
            "schema": "https://amplience.com/composablecommerce/image.json"
          }
        },
        "hideMobileText": false,
        "button": {
          "buttonLabel": "Shop Now >",
          "buttonLink": "https://www.boohoo.com/new-season?home_new-season",
          "buttonStyle": "white",
          "buttonFontWeight": "bold",
          "_meta": {
            "schema": "https://amplience.com/composablecommerce/advanced-button.json"
          },
          "buttonForegroundColour": "f29cc1",
          "buttonBorderStyle": "solid"
        },
        "hasVideo": false,
        "video": {
          "backgroundFullScreen": false,
          "backgroundEffect": false,
          "component": "Video",
          "_meta": {
            "schema": "https://amplience.com/composablecommerce/video.json"
          }
        },
        "showVideoTitle": false,
        "textPositionHorizontal": "left",
        "textPositionVertical": "bottom"
      }
    ],
    "loop": true,
    "navigationDots": true,
    "component": "Slider"
  }
}

const sampleVideoContent = {
  "@id": "http://content.cms.amplience.com/05c1affc-ac26-4f4f-98dc-9f12dc912583",
  "video": {
    "@id": "http://video.cms.amplience.com/39685e7b-3dbe-43f4-aebe-df94474f994e",
    "mediaType": "video",
    "name": "Amplience Overview",
    "endpoint": "csdemo",
    "defaultHost": "i1.adis.ws"
  },
  "_title": "test_video",
  "@type": "https://dev-solutions.s3.amazonaws.com/DynamicContentTypes/Accelerators/video.json"
};

storiesOf('Slider', module)
  .add('Looping', () => renderContent('amp-template-slider', sampleContent.content))
  .add('Non-Looping', () => renderContent('amp-template-slider', {
    ...sampleContent,
    loop: false
  }))
  .add('Without Navigation Dots', () => renderContent('amp-template-slider', {
    ...sampleContent,
    navigationDots: false
  }))
  .add('Video Slide', () => renderContent('amp-template-slider', {
    ...sampleContent,
    slides: sampleContent.slides.concat([sampleVideoContent])
  }))