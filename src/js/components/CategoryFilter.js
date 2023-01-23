import { templates, select } from '../settings.js';
import utils from '../utils.js';

class CategoryFilter {
  constructor(wrapper, data) {
    const thisCategoryFilter = this;

    thisCategoryFilter.wrapper = wrapper;
    thisCategoryFilter.data = data;

    thisCategoryFilter.render();
    thisCategoryFilter.addItem();
  }

  render() {
    const thisCategoryFilter = this;

    const generatedHTML = templates.categoryFilter(thisCategoryFilter.wrapper);
    thisCategoryFilter.element = utils.createDOMFromHTML(generatedHTML);
    const categoryFilterContainer = document.querySelector(select.containerOf.categoryFilterHome);
    categoryFilterContainer.appendChild(thisCategoryFilter.element);
  }

  addItem() {
    const thisCategoryFilter = this;

    thisCategoryFilter.allCategoryItem = [];

    for (let song of thisCategoryFilter.data) {
      console.log('song', song);
      for( let item of song.categories) {
        console.log('item', item);
        if (!thisCategoryFilter.allCategoryItem.includes(item)) {
          thisCategoryFilter.allCategoryItem.push(item);
        }
      }
    }

    console.log('allCategoryItem', thisCategoryFilter.allCategoryItem);
    const categoryFilterHTML = '<li>' + thisCategoryFilter.allCategoryItem.join('</li><li>') + '</li>';
    console.log('categoryFilterHTML', categoryFilterHTML);
    const categoryFilterWrapper = document.querySelector(select.containerOf.filterWrapper);
    console.log('categoryFilterWrapper', categoryFilterWrapper);
    categoryFilterWrapper.innerHTML = categoryFilterHTML;

  }
}

export default CategoryFilter;