import { templates, select } from '../settings.js';
import utils from '../utils.js';

class CategoryFilter {
  constructor(wrapper) {
    const thisCategoryFilter = this;

    thisCategoryFilter.wrapper = wrapper;

    thisCategoryFilter.render();
  }

  render() {
    const thisCategoryFilter = this;

    const generatedHTML = templates.categoryFilter(thisCategoryFilter.wrapper);
    thisCategoryFilter.element = utils.createDOMFromHTML(generatedHTML);
    const categoryFilterContainer = document.querySelector(select.containerOf.categoryFilterHome);
    categoryFilterContainer.appendChild(thisCategoryFilter.element);
  }

}

export default CategoryFilter;