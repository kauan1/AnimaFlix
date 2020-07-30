import React from 'react';
import PageDeafault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo(){
    return(
        <PageDeafault>
            <h1>Cadastro de Video</h1>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDeafault>
    );
}

export default CadastroVideo;