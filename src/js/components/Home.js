import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Home {
  constructor(wrapper) {
    const thisHome = this;

    thisHome.wrapper = wrapper;

    thisHome.render();

  }

  render() {
    const thisHome = this;

    const generatedHTML = templates.mainPageSubscribe(thisHome.wrapper);
    thisHome.element = utils.createDOMFromHTML(generatedHTML);
    const homeContainer = document.querySelector(select.containerOf.mainPageSubscribe);
    homeContainer.appendChild(thisHome.element);
  }
}

export default Home;