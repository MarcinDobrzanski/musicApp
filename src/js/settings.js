export const select = {
  templateOf: {
    templateSongs: '#template-songs',// CODE ADDED
  },
};

export const classNames = {};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
    id: 'id',
    title: 'title',
    author: 'author',
    songsFilename: 'filename',
    songsCategories: 'categories',
    songsRanking: 'ranking',
  },
};

export const templates = {
  templateSongs: Handlebars.compile(document.querySelector(select.templateOf.templateSongs).innerHTML),
};