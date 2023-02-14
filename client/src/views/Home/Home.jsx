import {style} from './Home.module.css';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';


const Home = ()=>{
    return(
        <div>
            <Header/>
            <SideBar/>
        </div>
    )
};

export default Home;