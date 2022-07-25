import Vue from 'vue';
import {MLInstaller, MLCreate, MLanguage} from 'vue-multilanguage';
import italianContent from './assets/content/content_IT.json';
import englishContent from './assets/content/content_EN.json';

Vue.use (MLInstaller);

export default new MLCreate ({
  initial: 'it',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage ('it').create (italianContent),
    new MLanguage ('en').create (englishContent),
    new MLanguage ('IT').create (italianContent),
    new MLanguage ('EN').create (englishContent),
  ],
});
