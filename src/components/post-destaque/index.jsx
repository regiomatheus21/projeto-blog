import React from "react";
import { NavLink } from "react-router-dom";
import DescricaoAutorPostDestaque from "../descricao-autor-post-destaque";
import './styles.css'
import {Button} from "./styles"

const postsDestaque =() =>{
    return(
            <div className="conteiner-post-destaque">
                <div>
                    <img src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg"/>
                </div>
                
                <div>
                    <p className="post-detaque-data">Jully 24, 2022</p>
                    <h2 className="post-detaque-tittle">Lorem Ipsum dolor sit amep consectur</h2>
                    <p className="post-destaque-descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p> 

                    <DescricaoAutorPostDestaque/>
                    <NavLink to="/Post-individual">
                    <Button>Ler Post</Button>
                    </NavLink>
                    
                </div>  
            </div>
    );
};
export default postsDestaque;