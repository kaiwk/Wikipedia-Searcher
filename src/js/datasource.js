const WIKI_SEARCH_API = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exlimit=max&format=json&exsentences=1&exintro=&explaintext=&generator=search&gsrlimit=10&gsrsearch=';

function DataProvider () {}

DataProvider.getData = function(searchVal, callback) {
  window.wikiCallback = callback;
  jsonp(WIKI_SEARCH_API + searchVal);
};

function jsonp (url) {
  var script = document.createElement('script');
  script.setAttribute('src', url + '&callback=wikiCallback');
  document.head.appendChild(script);
  document.head.removeChild(script);
}

export default DataProvider;
