const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://devnauakflix.herokuapp.com';
export default {
  URL_BACKEND_TOP,
};
