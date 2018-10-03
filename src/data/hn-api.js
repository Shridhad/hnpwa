const HN_API = "https://node-hnapi.herokuapp.com";
export function fetchItems(type, page = 1) {
    return fetch(`${HN_API}${type}?page=${page}`)
        .then(((response) => response.json()));
}