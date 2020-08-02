import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDeafault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://devnauakflix.herokuapp.com/categorias';
    fetch(URL_TOP)
      .then(async (res) => {
        const resp = await res.json();
        setCategorias([...resp]);
        console.log('ola');
      });
  }, []);

  return (
    <PageDeafault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        clearForm();
      }}
      >

        <FormField
          labelText="Nome da Categoria:"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          labelText="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          labelText="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>{categoria.titulo}</li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDeafault>
  );
}

export default CadastroCategoria;
