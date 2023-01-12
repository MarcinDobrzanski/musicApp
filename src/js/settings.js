export const select = {
  templateOf: {
    mainPage: '#template-main-page', 
    searchPage: '#template-search-page', 
  },
  containerOf: {
    mainPage: '.mainPage-container',
    pages: '#pages',
    searchPage: '#search-box',
  },
  player: {
    player: '.player',
    playerWrapper: '.songs__wrapper',
  },
  nav: {
    links: '.main-nav a',
    navWrapper: '.main-nav',
  }
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  }
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
    songs: 'songs',
    id: 'id',
    title: 'title',
    author: 'author',
    songsFilename: 'filename',
    songsCategories: 'categories',
    songsRanking: 'ranking',
  },
};

export const templates = {
  mainPage: Handlebars.compile(document.querySelector(select.templateOf.mainPage).innerHTML),
  searchPage: Handlebars.compile(document.querySelector(select.templateOf.searchPage).innerHTML),
};