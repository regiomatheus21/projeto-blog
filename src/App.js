import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';

//importando as pages
import PerfilUser from './pages/perfil';
import Home from './pages/home';
import Sobre from './pages/about';
import Navbar from './components/navbar';
import Footer from './components/rodape';
import CreatePosts from './pages/createPosts'
import Dashboard from './pages/dashboard';
import PostIndividual from './pages/post-individual';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
          <div className='container'>
            <Routes>
              <Route path="/" element ={<Home/>}/>
              <Route path="/about" element ={<Sobre/>}/>
              <Route path="/createPosts" element ={<CreatePosts/>}/>
              <Route path="/dashboard" element ={<Dashboard/>}/>
              <Route path="/post-individual" element ={<PostIndividual/>}/>
              <Route path="/perfil" element ={<PerfilUser/>}/>
            </Routes>
          </div>
      <Footer/>
      </BrowserRouter>
     
    </div>
      
  );
};

export default App;
