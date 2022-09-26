import React from "react";
import './styles.css'
import { NavLink } from "react-router-dom";

const DescricaoAutorPostDestaque = () =>{
    return(
    <NavLink to="/about">
    <div className="autor-post-destaque" >
     <img src="https://www.hypeness.com.br/1/2020/07/EDIT_Van-gogh.jpg"/>
        <div>
            <h3 className="nome-autor-post-destaque">Regio Matheus</h3>
            <p className="descricao-autor-post-destaque">descricao funcao</p>
        </div>
    </div>
    </NavLink>
    );
};

export default DescricaoAutorPostDestaque;
