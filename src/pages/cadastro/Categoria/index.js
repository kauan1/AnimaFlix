import React from 'react';
import PageDeafault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return(
        <PageDeafault>
            <h1>Cadastro de Categoria</h1>

            <Link to="/">
                Ir para home
            </Link>
        </PageDeafault>
    );
}

export default CadastroCategoria;