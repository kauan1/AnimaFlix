import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

function create(objetoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoVideo),
  })
    .then(async (resp) => {
      if (resp.ok) {
        const resposta = await resp.json();
        return resposta;
      }

      throw new Error('Não foi possivel pegar os dados :(');
    });
}

export default {
  create,
};
