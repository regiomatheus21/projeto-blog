import React from "react";
import './styles.css';

import VerFotos from '../../components/modal/verFotos';

const PerfilUser = () =>{
    return(
        <div>


        <div className="titulo-perfil-user">
            <h2>Detalhes do Usário</h2>
        </div>
        
        <div className="Albuns-perfil-user">
        <h2>Meus Albuns de Fotos</h2>
        <p>Título: quidem molestiae enim</p>
        <div className="fotos-album-user">
        <VerFotos/>
        </div>
        
        </div>


        </div>


    );

};
export default PerfilUser;