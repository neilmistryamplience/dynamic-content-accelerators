import {
  storiesOf
} from '@storybook/html';

import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';

import {
  renderContent
} from '../../../.storybook/rendering-service';

import bannerStyles from '../css/simple-image-banner.scss';

export const sampleContent = {
  "content": {
    "_meta": {
      "name": "wk36 - home staying in lockdown - simple banner",
      "schema": "https://amplience.com/composablecommerce/simple-image-banner.json",
      "deliveryId": "2ac601bd-3be1-4174-a170-8dcbfaa0e365"
    },
    "bannerImage": {
      "image": {
        "image": {
          "_meta": {
            "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
          },
          "id": "372afec9-b063-49f5-b6b4-49f8649e6c3d",
          "name": "wk36-slide-home-staying-in-desktop",
          "endpoint": "dem",
          "defaultHost": "1qsp9jqe0mztt1m86vvc1muff6.staging.bigcontent.io"
        }
      },
      "gifImage": false,
      "mobileImage": {
        "_meta": {
          "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
        },
        "id": "79e9e718-4225-4b9f-83e8-d38ac74ca400",
        "name": "wk36-slide-home-staying-in-mobile",
        "endpoint": "dem",
        "defaultHost": "1qsp9jqe0mztt1m86vvc1muff6.staging.bigcontent.io"
      },
      "component": "SimpleImage",
      "_meta": {
        "schema": "https://amplience.com/composablecommerce/simple-image.json"
      }
    },
    "linkcol":"#cbe6e8",
    "links": [
      {
        "label": "Work from home",
        "value": "https://www.currys.co.uk/gbuk/workspace-1773-commercial.html"
      },
      {
        "label": "Study from home",
        "value": "https://www.currys.co.uk/gbuk/workspace-1773-commercial.html#tab-2"
      },
      {
        "label": "Stay entertained",
        "value": "https://www.currys.co.uk/gbuk/workspace-1773-commercial.html#tab-3"
      },
      {
        "label": "Gaming",
        "value": "https://www.currys.co.uk/gbuk/workspace-1773-commercial.html#tab-4"
      }
    ],
    "component": "SimpleImageBanner"
  }
};

export const sampleWithAmplienceImages = {
  "content": {
    "_meta": {
      "name": "Simple Image Banner - CC",
      "schema": "https://amplience.com/composablecommerce/simple-image-banner.json",
      "deliveryId": "55db3243-4c15-438a-aae4-ca176a0a9d76"
    },
    "bannerImage": {
      "gifImage": false,
      "component": "SimpleImage",
      "_meta": {
        "schema": "https://amplience.com/composablecommerce/simple-image.json"
      },
      "image": {
        "image": {
          "_meta": {
            "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
          },
          "id": "c05d1fb7-683f-4065-bfce-c3da93be488a",
          "name": "UK-hp-banner-desktop-full-1920x670-UT50-off",
          "endpoint": "nmdemo",
          "defaultHost": "j8k03awso8f81on4oigwzgwv1.staging.bigcontent.io"
        }
      },
      "mobileImage": {
        "_meta": {
          "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
        },
        "id": "3478c923-fdbb-4e08-8b20-5a9571e56031",
        "name": "UK-hp-banner-mobile-480x632-UT50-off",
        "endpoint": "nmdemo",
        "defaultHost": "j8k03awso8f81on4oigwzgwv1.staging.bigcontent.io"
      }
    },
    "link": "https://www.bodyandfit.com/en-gb/en-gb/c/back-to-your-best?hpbanner",
    "analytics": "hpbanner",
    "component": "SimpleImageBanner"
  }
}

export const sampleContentPositional = {
  "content": {
    "_meta": {
      "name": "Simple Image Banner (CC) - Beauty",
      "schema": "https://amplience.com/composablecommerce/simple-image-banner.json",
      "deliveryId": "494a25b2-514a-4ecf-92af-dfa16aeca247"
    },
    "bannerImage": {
      "image": {
        "image": {
          "_meta": {
            "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
          },
          "id": "2fe7b86f-55cc-4c2a-b378-ad0a952e56db",
          "name": "070121_boohoobeauty_hero_desktop",
          "endpoint": "dem",
          "defaultHost": "1qsp9jqe0mztt1m86vvc1muff6.staging.bigcontent.io"
        }
      },
      "gifImage": false,
      "mobileImage": {
        "_meta": {
          "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
        },
        "id": "55ac8380-f709-4cdc-bf48-719cc23a8ca7",
        "name": "070121_boohoobeauty_hero_mobile",
        "endpoint": "dem",
        "defaultHost": "1qsp9jqe0mztt1m86vvc1muff6.staging.bigcontent.io"
      },
      "component": "SimpleImage",
      "_meta": {
        "schema": "https://amplience.com/composablecommerce/simple-image.json"
      },
      "button": {
        "button": {
          "buttonLabel": "Positional Button Desktop",
          "_meta": {
            "schema": "https://amplience.com/composablecommerce/advanced-button.json"
          }
        },
        "buttonPosX": 10,
        "buttonPosY": 10
      },
      "mobileButton": {
        "button": {
          "buttonLabel": "Positional Button Mobile",
          "buttonLink": "#",
          "_meta": {
            "schema": "https://amplience.com/composablecommerce/advanced-button.json"
          }
        }
      }
    },
    "links": [
      {
        "label": "Global Link 1"
      },
      {
        "label": "Global Link 2"
      },
      {
        "label": "Global Link 3"
      },
      {
        "label": "Global Link 4"
      }
    ],
    "positionalLink": {
      "button": {
        "buttonLabel": "Positional Button Example",
        "buttonLink": "#",
        "_meta": {
          "schema": "https://amplience.com/composablecommerce/advanced-button.json"
        }
      },
      "posd": {
        "posX": 20,
        "posY": 30
      },
      "posm": {
        "posX": 10,
        "posY": 60
      }
    },
    "component": "SimpleImageBanner"
  }
}

export const sampleLocalisedNL = {
  "content": {
    "_meta": {
      "name": "Simple Image Banner Localised - CC",
      "schema": "https://amplience.com/composablecommerce/simple-image-banner-localised.json",
      "deliveryId": "6d8a1eb8-5303-407c-bba2-454b8b8d4aa4"
    },
    "bannerImage": {
      "gifImage": false,
      "component": "SimpleImage",
      "_meta": {
        "schema": "https://amplience.com/composablecommerce/simple-image.json"
      },
      "image": {
        "image": {
          "_meta": {
            "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
          },
          "id": "323005ac-b1ef-49a3-b56c-839d1b99a3dd",
          "name": "NL-hp-banner-desktop-full-1920x670-UT50-off",
          "endpoint": "nmdemo",
          "defaultHost": "j8k03awso8f81on4oigwzgwv1.staging.bigcontent.io"
        }
      },
      "mobileImage": {
        "_meta": {
          "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
        },
        "id": "0ce6ae06-3e5e-4dfb-9f9f-41250d8240d3",
        "name": "NL-hp-banner-mobile-480x632-UT50-off",
        "endpoint": "nmdemo",
        "defaultHost": "j8k03awso8f81on4oigwzgwv1.staging.bigcontent.io"
      }
    },
    "link": "https://www.bodyandfit.com/nl-nl/nl-nl/c/back-to-your-best?hpbanner",
    "analytics": null,
    "component": "SimpleImageBannerLocalised"
  }
}

storiesOf('Simple Image Banner', module)
  .add('Simple Image Banner', () => renderContent('amp-template-simple-image-banner', sampleContent.content))
  .add('Simple Image Banner Amplience', () => renderContent('amp-template-simple-image-banner', sampleWithAmplienceImages.content))
  .add('Simple Image Banner Localised NL', () => renderContent('amp-template-simple-image-banner', sampleLocalisedNL.content))
  .add('Simple Image Banner Positional', () => renderContent('amp-template-simple-image-banner', sampleContentPositional.content));
  sampleContentPositional