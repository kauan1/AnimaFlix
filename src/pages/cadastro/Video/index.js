import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDeafault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitle = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: 'TÔ CARENTE, ME AJUDA?',
    url: 'https://www.youtube.com/watch?v=mzy-LYWe0Lc',
    categoria: '',
  });

  console.log(categoryTitle);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((allCategorias) => {
        setCategorias(allCategorias);
      });
  }, []);

  return (
    <PageDeafault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(e) => {
        e.preventDefault();

        const categoriaEscolhida = categorias.find((cate) => cate.titulo === values.categoria);
        console.log(categoriaEscolhida);
        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
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
          suggestions={categoryTitle}
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
