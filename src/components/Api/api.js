const key = '25747896-3b3c804de6476e3d2d2bc0cb1';
const per_page = 12;
const parameters = 'image_type=photo&orientation=horizontal';
const BASE_URL = `https://pixabay.com/api/?key=${key}&${parameters}&per_page=${per_page}`;

export default function getImages(title, page) {
  return fetch(`${BASE_URL}&q=${title}&page=${page}`)
    .then(response => response.json())
    .then(data =>
      data.hits.reduce(
        (acc, key) => [
          ...acc,
          {
            id: key.id,
            webformatURL: key.webformatURL,
            largeImageURL: key.largeImageURL,
          },
        ],
        []
      )
    );
}
