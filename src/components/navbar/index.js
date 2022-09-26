//react router dom
import {NavLink} from 'react-router-dom'
import styles from './styles.css'



const Navbar = () =>{
    return (
        <nav className="Navbar">
            <NavLink className="brand" >
                Mini <span>Blog</span>
            </NavLink>

            <ul className="links_list">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/createPosts" >Novo Post</NavLink>
                </li>
                
                <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </li>

                <li>
                    <NavLink to="/about">Sobre</NavLink>
                </li>

            </ul>
        </nav>
    );
};
export default Navbar;
