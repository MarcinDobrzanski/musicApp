import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Home {
  constructor(data) {
    const thisHome = this;

    thisHome.data = data;

    thisHome.render();
  }

  render() {
    const thisHome = this;

    const generatedHTML = templates.mainPage(thisHome.data);
    thisHome.element = utils.createDOMFromHTML(generatedHTML);
    const mainPageContainer = document.querySelector(select.containerOf.mainPage);
    mainPageContainer.appendChild(thisHome.element);
  }
}

export default Home;