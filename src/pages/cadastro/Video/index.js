import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDeafault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'TÔ CARENTE, ME AJUDA?',
    url: 'https://www.youtube.com/watch?v=mzy-LYWe0Lc',
    categoria: '',
  });

  return (
    <PageDeafault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(e) => {
        e.preventDefault();

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
        })
          .then(() => {
            console.log('Cad sucesso');
            history.push('/');
          });

      }}
      >
        <FormField
          labelText="Título do Vídeo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          labelText="URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          labelText="Categoria do Vídeo"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDeafault>
  );
}

export default CadastroVideo;
