
import axios from "axios";
import React from "react";
import './styles.css'
import Demo from '../modal/demo'

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";


//import PostIndividual from '../../pages/post-individual';
export function List (){
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      });
    }, []);
  
    if (!post) return null;
  
    return (
      <div className="post-indivi" >
        <h2>Título</h2>
        <p>{post.title}</p>
        <h2>Descrição</h2>
        <p>{post.body}</p>
        <Demo/>
      

      </div>
      
      
    );
  }
