import {
  storiesOf
} from '@storybook/html';

import {
  renderContent
} from '../../../.storybook/rendering-service';

const components = [
  ['Banner', 'banner'],
  ['Blog Post', 'blogPost'],
  ['Card', 'card'],
  ['Card List', 'cardList'],
  ['External Block', 'externalBlock'],
  ['Image', 'image'],
  ['Page', 'page'],
  ['Promo', 'promo'],
  ['Promo List', 'promo', 'samplePromoListContent'],
  ['Slider', 'slider'],
  ['Split Block', 'splitBlock'],
  ['Text', 'text'],
  ['Video', 'video']
];

const stories = storiesOf('Template Chooser', module);

components.forEach(([label, name, contentName = 'sampleContent']) => {
  stories.add(label, () => renderContent('amp-template-templateChooser', require(`../../${name}/stories/${name}.stories`)[contentName]));
});