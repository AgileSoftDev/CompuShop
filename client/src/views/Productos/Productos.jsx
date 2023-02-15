import {style} from './Productos.module.css';
import SideBar from '../../components/SideBar/SideBar';
import Order from "../../components/Order/Order.jsx"


const Home = ()=>{
    return(
        <div>
            <Order/>
            <SideBar/>
        </div>
    )
};

export default Home;