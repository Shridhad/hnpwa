const HN_API = "http://node-hnapi.herokuapp.com/news";
export function fetchTopNews(page) {
  page = page || 1;
  return fetch(`${HN_API}?page=${page}`).then(response => response.json());
}