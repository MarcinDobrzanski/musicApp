import { templates, select, classNames } from '../settings.js';
import utils from '../utils.js';

class Home {
  constructor(wrapper) {
    const thisHome = this;

    thisHome.wrapper = wrapper;

    thisHome.render();
    thisHome.joinUsClick();

  }

  render() {
    const thisHome = this;

    const generatedHTML = templates.mainPageSubscribe(thisHome.wrapper);
    thisHome.element = utils.createDOMFromHTML(generatedHTML);
    const homeContainer = document.querySelector(select.containerOf.mainPageSubscribe);
    homeContainer.appendChild(thisHome.element);
  }

  joinUsClick() {
    const thisHome = this;

    thisHome.subscribeButton = document.querySelector(select.forms.subscribeButton);
    thisHome.pages = document.querySelector(select.containerOf.pages);
    thisHome.activePage = document.querySelector(select.containerOf.pages).children;
    thisHome.navLinks = document.querySelectorAll(select.nav.links);

    thisHome.subscribeButton.addEventListener('click', function (event) {
      event.preventDefault();
      const idFromHash = event.target.hash.replace('#', '');
      // const idHash = event.target.children[0].hash.replace('/', '');
      for (let page of thisHome.activePage) {
        page.classList.remove(classNames.pages.active);
        if (page.id == idFromHash) {
          page.classList.add(classNames.pages.active);
          window.location.hash = '#/' + idFromHash;
        }
      }
    });
  }
}

export default Home;