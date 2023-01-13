import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Discover {
  constructor(item) {
    const thisDiscover = this;

    thisDiscover.item = item;

    thisDiscover.render();

  }

  render() {
    const thisDiscover = this;

    const generatedHTML = templates.discoverPage(thisDiscover.item);
    thisDiscover.element = utils.createDOMFromHTML(generatedHTML);
    const discoverContainer = document.querySelector(select.containerOf.discoverPage);
    discoverContainer.appendChild(thisDiscover.element);
  }
}

export default Discover;