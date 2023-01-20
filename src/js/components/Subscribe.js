import { templates } from '../settings.js';
import utils from '../utils.js';

class Subscribe {
  constructor(wrapper) {
    const thisSubscribe = this;

    thisSubscribe.wrapper = wrapper;

    thisSubscribe.render();

  }

  render() {
    const thisSubscribe = this;

    const generatedHTML = templates.subscribePage(thisSubscribe.wrapper);
    thisSubscribe.element = utils.createDOMFromHTML(generatedHTML);
    // const homeContainer = document.querySelector(select.containerOf.subscribeWrapperPage);
    thisSubscribe.wrapper.appendChild(thisSubscribe.element);
  }
}

export default Subscribe;