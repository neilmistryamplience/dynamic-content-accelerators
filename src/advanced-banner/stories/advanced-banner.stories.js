import {
  storiesOf
} from '@storybook/html';

import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';

import {
  renderContent
} from '../../../.storybook/rendering-service';

import globalBannerStyles from '../../common/css/o-dc-components.css';
import advancedBannerStyles from '../css/advanced-banner.scss';

export const sampleContent = 

{"content":{"_meta":{"name":"Advanced Banner - TEXT TOP LEFT","schema":"https://amplience.com/composablecommerce/advanced-banner.json","deliveryId":"5d48dafa-2b5d-4b0b-9a4d-153447f242a5"},"bannerImage":{"imageholder":{"image":{"crop":[0,0,0,0],"rot":0,"hue":0,"sat":0,"bri":0,"fliph":false,"flipv":false,"poi":{"x":0.6792237442922374,"y":0.365296803652968},"aspectLock":"poi","query":"poi=0.6792,0.3653,0,0&scaleFit=poi","image":{"_meta":{"schema":"http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"},"id":"61bb6e40-c302-4f82-bade-44a1ab0f0881","name":"banner-womensbags-2-1-large-desktop","endpoint":"nmdemo","defaultHost":"i1.adis.ws"}}},"gifImage":false,"togglePOI":false,"component":"Image","imageAltText":"Women’s handbags","seoText":"Womens-handbags","_meta":{"schema":"https://amplience.com/composablecommerce/image.json"}},"header":{"text":"Women’s handbags","style":"black","fontSize":"medium","fontWeight":"bold"},"subheader":{"text":"Online exclusives & New arrivals","style":"black","fontSize":"small","fontWeight":"bold"},"description":{"text":"What do women look for when looking at women’s handbags? The ideal best friend, actually: always there for them, useful, an open mind and full of personality.","style":"black","fontSize":"small"},"hideMobileText":false,"button":{"buttonLabel":"VIEW ALL BAGS","buttonLink":"#","_meta":{"schema":"https://amplience.com/composablecommerce/advanced-button.json"}},"hasVideo":false,"video":{"backgroundFullScreen":false,"backgroundEffect":false,"component":"Video","_meta":{"schema":"https://amplience.com/composablecommerce/video.json"}},"showVideoTitle":false,"disclaimer":"*This is the disclaimer text","disclaimerFontColour":"rgb(0, 0, 0)","disclaimerTextHorizontal":"center","textPositionHorizontal":"left","textPositionVertical":"top"}}

export const sampleContentFlash = 

{"content":{"_meta":{"name":"Advanced Banner - TEXT TOP LEFT","schema":"https://amplience.com/composablecommerce/advanced-banner.json","deliveryId":"5d48dafa-2b5d-4b0b-9a4d-153447f242a5"},"bannerImage":{"imageholder":{"image":{"crop":[0,0,0,0],"rot":0,"hue":0,"sat":0,"bri":0,"fliph":false,"flipv":false,"poi":{"x":0.6792237442922374,"y":0.365296803652968},"aspectLock":"poi","query":"poi=0.6792,0.3653,0,0&scaleFit=poi","image":{"_meta":{"schema":"http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"},"id":"61bb6e40-c302-4f82-bade-44a1ab0f0881","name":"banner-womensbags-2-1-large-desktop","endpoint":"nmdemo","defaultHost":"i1.adis.ws"}}},"gifImage":false,"togglePOI":false,"component":"Image","imageAltText":"Women’s handbags","seoText":"Womens-handbags","_meta":{"schema":"https://amplience.com/composablecommerce/image.json"}},"header":{"text":"Women’s handbags","style":"flashing","fontSize":"medium","fontWeight":"bold"},"subheader":{"text":"Online exclusives & New arrivals","style":"black","fontSize":"small","fontWeight":"bold"},"description":{"text":"What do women look for when looking at women’s handbags? The ideal best friend, actually: always there for them, useful, an open mind and full of personality.","style":"black","fontSize":"small"},"hideMobileText":false,"button":{"buttonLabel":"VIEW ALL BAGS","buttonLink":"#","_meta":{"schema":"https://amplience.com/composablecommerce/advanced-button.json"}},"hasVideo":false,"video":{"backgroundFullScreen":false,"backgroundEffect":false,"component":"Video","_meta":{"schema":"https://amplience.com/composablecommerce/video.json"}},"showVideoTitle":false,"disclaimer":"*This is the disclaimer text","disclaimerFontColour":"rgb(0, 0, 0)","disclaimerTextHorizontal":"center","textPositionHorizontal":"left","textPositionVertical":"top"}}


export const sampeContentBGTY = {
  "content": {
    "_meta": {
      "name": "Advanced Banner (CC)",
      "schema": "https://amplience.com/composablecommerce/advanced-banner.json",
      "deliveryId": "72df49b4-4b7c-439c-a2ed-b35a8c54132a"
    },
    "bannerImage": {
      "imageholder": {
        "image": {
          "poi": {
            "x": -1,
            "y": -1
          },
          "fliph": false,
          "flipv": false
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
    "hideMobileText": false,
    "hasVideo": true,
    "video": {
      "backgroundFullScreen": true,
      "backgroundEffect": false,
      "component": "Video",
      "addYoutube": "https://www.youtube.com/embed/hpIYQdnnzOI",
      "_meta": {
        "schema": "https://amplience.com/composablecommerce/video.json"
      }
    },
    "showVideoTitle": false
  }
}

export const sampleCountdown = {
  "content": {
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
      "style": "flashing",
      "fontSize": "large",
      "fontWeight": "bold"
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
  }
}
storiesOf('Advanced Banner', module)
  .add('Example Content', () => renderContent('amp-template-advanced-banner', sampleContent.content))
  .add('Flashing Content', () => renderContent('amp-template-advanced-banner', sampleContentFlash.content))
  .add('Countdown Content', () => renderContent('amp-template-advanced-banner', sampleCountdown.content))
  .add('Youtube Banner', () => renderContent('amp-template-advanced-banner', sampeContentBGTY.content))