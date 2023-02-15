import {style} from './Home.module.css';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import Order from '../../components/Order/Order';


const Home = ()=>{
    return(
        <div>
            <Header/>
            <Order/>
            <SideBar/>
        </div>
    )
};

export default Home;