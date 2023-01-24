import { templates, select, classNames } from '../settings.js';
import utils from '../utils.js';

class CategoryFilter {
  constructor(wrapper, data) {
    const thisCategoryFilter = this;

    thisCategoryFilter.wrapper = wrapper;
    thisCategoryFilter.data = data;

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

    thisCategoryFilter.namesCategory = [];

    for (let song of thisCategoryFilter.data) {
      console.log('song', song);
      for (let item of song.categories) {
        console.log('item', item);
        if (!thisCategoryFilter.namesCategory.includes(item)) {
          thisCategoryFilter.namesCategory.push(item);
        }
      }
    }

    console.log('namesCategory', thisCategoryFilter.namesCategory);
    const categoryFilterHTML = '<li>' + thisCategoryFilter.namesCategory.join('</li><li>') + '</li>';
    console.log('categoryFilterHTML', categoryFilterHTML);
    const categoryFilterWrapper = document.querySelector(select.containerOf.filterWrapper);
    console.log('categoryFilterWrapper', categoryFilterWrapper);
    categoryFilterWrapper.innerHTML = categoryFilterHTML;

  }

  filter() {
    const thisCategoryFilter = this;

    thisCategoryFilter.categoryWrapperItem = document.querySelector(select.containerOf.filterWrapper).children;
    thisCategoryFilter.categoryWrapper = document.querySelector(select.containerOf.filterWrapper);
    thisCategoryFilter.songWrapper = document.querySelectorAll(select.containerOf.songMainPageWrapper);
    console.log('thisCategoryFilter.songWrapper', thisCategoryFilter.songWrapper);


    thisCategoryFilter.categoryWrapper.addEventListener('click', function (event) {
      event.preventDefault();
      if (event.target.classList.contains(classNames.pages.active)) {
        event.target.classList.remove(classNames.pages.active);
      } else {
        event.target.classList.add(classNames.pages.active);
      }

      for (let song of thisCategoryFilter.songWrapper) {
        console.log('filter-song', song);
        const includesCategorySong = song.children[0].children[2].children[0].children[0].textContent;
        if (includesCategorySong.includes(event.target.textContent) && song.classList.contains(classNames.pages.active)) {
          console.log('includesCategorySong', includesCategorySong);
          song.classList.remove(classNames.pages.active);
        } else if (includesCategorySong.includes(event.target.textContent) && !song.classList.contains(classNames.pages.active)) {
          song.classList.add(classNames.pages.active);
        }
      }
    });

  }
}

export default CategoryFilter;