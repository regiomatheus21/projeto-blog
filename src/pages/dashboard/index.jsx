import { Link } from "react-router-dom";
import PostsDashboard from "../../components/posts-dashboard";
import './styles.css'

const Dashboard = () => {
    return (
        
        <div className="conteiner-dashboard" >
            <h2 > Dashboard</h2>
            <p>Gerencie seus Posts</p>

        <div className="post-heder">
            <span>Título</span>
            <span>Ações</span>
            
        </div>
            <div className="post-dashboard-ajuste">
            <PostsDashboard/>
            </div>        
        </div>

    );


};

export default Dashboard;