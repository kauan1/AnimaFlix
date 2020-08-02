import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (resp) => {
      if (resp.ok) {
        const resposta = await resp.json();
        return resposta;
      }

      throw new Error('Não foi possivel pegar os dados :(');
    });
}

export default {
  getAllWithVideos,
};
