
import React from "react";
import { NavLink } from "react-router-dom";
import './styles.css';


const PostsDashboard = () =>{

return (
        <div className="post1">
            <span>sunt aut facere repellat provident occaecati excepturi optio reprehenderit </span>
           
           <div>
                <NavLink to="/perfil">
                <button >VER PERFIL</button>
                </NavLink>
           
            <button>EDITAR</button>
            <button>EXCLUIR</button>
           </div>
            
        </div>


);

};
export default PostsDashboard;


