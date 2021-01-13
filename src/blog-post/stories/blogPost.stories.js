import {
  storiesOf
} from '@storybook/html';

import {
  renderContent
} from '../../../.storybook/rendering-service';

import blogPostStyles from '../css/blogPost.scss';

export const sampleContent = {
  "content": {
    "_meta": {
      "name": "Blog Post - Should I buy a smart fridge?",
      "schema": "https://amplience.com/composablecommerce/blog-post.json",
      "deliveryId": "b428a7f6-1b79-426b-966b-bf37eaa89861"
    },
    "snippet": {
      "image": {
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
              "id": "e1c42948-4aac-4919-9ca3-f0b72acc1f54",
              "name": "samsung-family-hub-199938",
              "endpoint": "dem",
              "defaultHost": "1qsp9jqe0mztt1m86vvc1muff6.staging.bigcontent.io"
            }
          }
        },
        "gifImage": false,
        "togglePOI": false,
        "hotspots": false,
        "component": "Image",
        "imageAltText": "Smart fridge",
        "_meta": {
          "schema": "https://amplience.com/composablecommerce/image.json"
        }
      },
      "cta": {
        "label": "Read more",
        "value": "https://techtalk.currys.co.uk/kitchen-home/fridges-freezers/should-i-buy-a-smart-fridge/"
      },
      "title": "Should I buy a smart fridge?",
      "description": "They’re here. And they’re going to change your kitchen like you wouldn’t believe. Here’s how…"
    },
    "content": {
      "text": [
        {
          "type": "markdown",
          "data": "Imagine: a fridge-freezer that lets you look inside from your phone. Stop imagining. The future is here.\n\nSmart fridges are not only fun to use and super high-tech, they’re a real advantage for families. With all sorts of features and functions – such as smart screens – they’re here to make home life easier than ever.\n\nLet’s take a look at a few ways smart fridges could make your life oh-so very easy…\n\n## Shop smart\n\n*Smart fridge-freezers come with video panels on the door that let you see inside – and many even connect with your phone!*"
        },
        {
          "type": "dc-image-link",
          "data": {
            "_meta": {
              "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
            },
            "id": "b5c91c47-dc8e-4b4f-bf88-7d94e9229f6c",
            "name": "wk34-block-fridge",
            "endpoint": "dem",
            "defaultHost": "1qsp9jqe0mztt1m86vvc1muff6.staging.bigcontent.io"
          }
        },
        {
          "type": "markdown",
          "data": "For instance, check out the **[Samsung Family Hub RS8000](https://www.currys.co.uk/gbuk/household-appliances/refrigeration/fridge-freezers/samsung-family-hub-rs8000-rs68n8941sl-eu-american-style-smart-fridge-freezer-aluminium-10178884-pdt.html \"Samsung Family Hub RS8000\"),** a Wi-Fi enabled smart fridge freezer that’s packed with clever tech.\n\nIt has **3 built-in cameras** and a smart window, so you can see what’s inside your fridge or freezer without even opening the door.\n\nWith these cameras, you can…\n\n* Check whether you need milk while you’re at the supermarket, using an app on your smartphone\n\n* Tag food using the touchscreen, so you know when it has reached its use-by-date\n\n* Pull up recipes on the fridge’s touchscreen and create shopping liststo send to your smartphone\n\n \n\n## More energy-efficient than ever\n\n*Smart fridge-freezers contain tech that makes them more energy-efficient.*"
        },
        {
          "type": "dc-image-link",
          "data": {
            "_meta": {
              "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
            },
            "id": "214be516-f945-45a4-810c-4b1d4de85d57",
            "name": "u_10192365_smartFridge",
            "endpoint": "dem",
            "defaultHost": "1qsp9jqe0mztt1m86vvc1muff6.staging.bigcontent.io"
          }
        },
        {
          "type": "markdown",
          "data": "Take the **[LG GSX960MCVZ](https://www.currys.co.uk/gbuk/household-appliances/refrigeration/fridge-freezers/lg-gsx960mcvz-american-style-smart-fridge-freezer-black-10192367-pdt.html \"LG GSX960MCVZ American-Style Fridge Freezer\")** (bit of a mouthful) – not only is it A+++ energy-ratedas standard, with its Instaview panel on the door, it can help reduce cold air loss and keep your running costs down.\n\nHow? Well, simply knock twice – knock, knock – and the Instaview panel will show you what’s inside, meaning **you won’t have to open the fridge** to get certain bits.\n\nBetter still, download LG’s Smart ThinQ app and your fridge will ping you if you’ve accidentally left the door open!You can even adjust the inside temperature using the app – handy when you want to make your groceries extra-cold on hot days."
        },
        {
          "type": "dc-image-link",
          "data": {
            "_meta": {
              "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
            },
            "id": "5e0803f9-110e-4bf7-bf84-88e02c2e21ac",
            "name": "samsung-rf24r7201sr-eu",
            "endpoint": "dem",
            "defaultHost": "1qsp9jqe0mztt1m86vvc1muff6.staging.bigcontent.io"
          }
        },
        {
          "type": "markdown",
          "data": "The **[Samsung RF24R7201SR/EU](https://www.currys.co.uk/gbuk/household-appliances/refrigeration/fridge-freezers/samsung-rf24r7201sr-eu-smart-fridge-freezer-stainless-steel-10192992-pdt.html \"Samsung RF24R7201SR/EU fridge freezer\")** (another mouthful) comes with a ridiculously cool **FlexZone**.\n\nWith just the push of a button, this drawer switches from being a refrigerator to a freezer, and back again.\n\nStocked up on too much prosecco for the summer BBQ? Create a new refrigerated section to cram it all in. Cooked too much dinner? Put it onto freezer mode and open up more space to store your leftovers.\n\nHow’s this for an added bonus: you can even switch your FlexZone over using an appon your phone. So, if you’re on your way home from the shops, you can have your extra fridge or freezer space ready for when you get back.\n\nProduct List:"
        },
        {
          "type": "dc-content-link",
          "data": {
            "_meta": {
              "name": "SFCC Curated Products - Cameras",
              "schema": "https://amplience.com/composablecommerce/sfcc-curated-products.json",
              "deliveryId": "61973ba0-f65c-4cc6-8c5f-5cc1dd78efb3"
            },
            "productList": [
              "kodak-v1273M",
              "nikon-d40-wlensM",
              "canon-powershot-sd1100-isM",
              "S2510211M"
            ],
            "header": "What's trending ?"
          }
        }
      ],
      "component": "RichText",
      "_meta": {
        "schema": "https://amplience.com/composablecommerce/rich-text.json"
      }
    },
    "component": "BlogPost"
  }
};

storiesOf('Blog Post', module)
  .add('Example content', () => renderContent('amp-template-blog-post', sampleContent.content));
