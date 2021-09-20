import "./home.css"
import { FaReact,FaBootstrap,FaRoute } from 'react-icons/fa';
import { FiDatabase } from 'react-icons/fi';
export default function Home()
{
    return(
        <>
        <div className="homeContainer">
        <div  className="homeImageContainer">
            <img className="homeImage" src="https://source.unsplash.com/kvIAk3J_A1c"  alt="post"/>
            <h3 className="homeImageText">Get your close circle closer</h3>
        </div>
       
        <div className="toolImageConatiner">
            <ul><h2>Tools Used</h2>
            <li><h4><FaReact/> ReactJs</h4></li>
            <li><h4><FaBootstrap/> React-Bootstrap</h4></li>
            <li><h4><FaRoute/> React-Router-Dom</h4></li>
            <li><h4><FiDatabase/> Axios</h4></li>
            </ul>
        </div>
        </div>
        </>
    )
}