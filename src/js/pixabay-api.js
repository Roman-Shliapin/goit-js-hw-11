import axios from 'axios';

export function getImagesByQuery(query) {
  return axios('https://pixabay.com/api/', {
    params: {
      key: '52807659-bebfa0ce69a97bf76a6d524af',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(({ data }) => {
        console.log(data.hits);
        return data.hits;
        
    })
    .catch( error => {
        console.log(error);
        throw error;
    })
}
