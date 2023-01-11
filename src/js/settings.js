export const select = {
  templateOf: {
    mainPage: '#template-main-page', 
  },
  containerOf: {
    mainPage: '.mainPage-container',
  },
  player: {
    player: '.player',
  },
};

export const classNames = {};

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
};