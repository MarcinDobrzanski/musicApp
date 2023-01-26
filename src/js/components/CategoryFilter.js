import { templates, select, classNames } from '../settings.js';
import utils from '../utils.js';

class CategoryFilter {
  constructor(wrapper, data) {
    const thisCategoryFilter = this;

    thisCategoryFilter.wrapper = wrapper;
    thisCategoryFilter.data = data;

    thisCategoryFilter.namesCategory = [];

    thisCategoryFilter.render();
    thisCategoryFilter.addItem();
    thisCategoryFilter.filter();
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

    for (let song of thisCategoryFilter.data) {
      for (let item of song.categories) {
        if (!thisCategoryFilter.namesCategory.includes(item)) {
          thisCategoryFilter.namesCategory.push(item);
        }
      }
    }

    const categoryFilterHTML = '<li>' + thisCategoryFilter.namesCategory.join('</li>'+','+'<li>') + '</li>';
    const categoryFilterWrapper = document.querySelector(select.containerOf.filterWrapper);
    categoryFilterWrapper.innerHTML = categoryFilterHTML;

  }

  filter() {
    const thisCategoryFilter = this;

    thisCategoryFilter.categoryWrapperItem = document.querySelector(select.containerOf.filterWrapper).children;
    thisCategoryFilter.categoryWrapper = document.querySelector(select.containerOf.filterWrapper);
    thisCategoryFilter.songWrapper = document.querySelectorAll(select.containerOf.songMainPageWrapper);


    thisCategoryFilter.categoryWrapper.addEventListener('click', function (event) {
      event.preventDefault();
      if (event.target.classList.contains(classNames.pages.active)) {
        event.target.classList.remove(classNames.pages.active);
      } else {
        event.target.classList.add(classNames.pages.active);
      }

      for (let song of thisCategoryFilter.songWrapper) {
        const includesCategorySong = song.children[0].children[2].children[0].children[0].textContent;
        if (!includesCategorySong.includes(event.target.textContent) && song.classList.contains(classNames.pages.hide)) {
          song.classList.remove(classNames.pages.hide);
        } else if (!includesCategorySong.includes(event.target.textContent) && !song.classList.contains(classNames.pages.hide)) {
          song.classList.add(classNames.pages.hide);
        }
      }
    });

  }
}

export default CategoryFilter;