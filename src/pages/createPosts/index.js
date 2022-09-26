import './styles.css'
import {Button} from './styles.js'

const CreatePosts = () =>{    
    //const [title,setTitle] = useState ("")
    //const [image,setImage] = useState ("")
    //const [body,setBody] = useState ("")
    //const [tags,setTags] = useState ("")
    const handleSubmit = (e) => {
    e.preventDefault();
   }
    return (
        <div className='create-post'>
            <h2>Criar Post</h2>
            <p>Escreva o que desejar e compartilhe seu conhecimento!</p>
            <form className="create-post-form">
                <label>
                    <span>Titulo:</span>
                    <input type="text"
                     name ="title" 
                     required 
                     placeholder="Adicione um bom titulo ..."/>

                </label>

                <label>
                    <span>URL da image:</span>
                    <input type="text" name ="image" required placeholder="Adicione uma imagem ..." />
                    
                </label>

                <label>
                    <span>Conteúdo:</span>
                    <textarea name="body" required placeholder="Adicione o conteúdo do post...">
                    </textarea>
                </label>

                <label>
                    <span>Tags:</span>
                    <input type="text" name ="Tags" required 
                    placeholder="Adiciona as tags separadas por vírgulas ..."/>   
                </label> 
               <label>
                <Button >Criar Post</Button>
               </label>
                             
            </form>

        </div>
    );
};

export default CreatePosts;