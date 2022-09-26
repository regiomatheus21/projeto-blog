import './styles.css'
import { NavLink } from "react-router-dom";
import DescricaoAutorPostDestaque from '../../components/descricao-autor-post-destaque'
import {Button} from "./styles"
import React, {useEffect,useState} from 'react';
import Api from '../../api';
import ListaPosts from '../lista-de-posts'


const posts = () =>{
    return(
        <div className='conteiner-post'>

            <div>
                <img src="https://wedologos.bladecdn.net/wp-content/uploads/2014/05/imagem-post-blog.jpg"/>               
            </div>

            <div>
                <p className='post-date'>July 24,2022</p>
                <h2 className='post-tittle'>Lorem ipsum dolor sit amet consectetur</h2>
                <p className='post-descricao'>Lorem ipsum dolor sit amet consectetur</p>
                <DescricaoAutorPostDestaque/>
                <NavLink to="/post-individual">
                <Button>Ler Post</Button>
                
                </NavLink>
                
            </div>

        </div>
    );

};

export default posts;