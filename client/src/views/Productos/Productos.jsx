import style from './Productos.module.css';
import Sidebar from '../../components/SideBar/Sidebar.jsx';
import Order from "../../components/Order/Order.jsx"
import ContainerCards from "../../components/CardContainer/ContainerCards.jsx"

const productos = [
    {
        id: 1,
        name: 'Memoria GeiL DDR4 16GB 3000MHz Super Luce RGB Black',
        image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31776_Memoria_GeiL_DDR4_16GB_3000MHz_Super_Luce_RGB_Black_646b61f7-grn.jpg',
        precio: 35650
    },
    {
        id: 2,
        name: 'Gabinete Kolink Void Black ARGB ATX Vidrio Templado',
        image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20250_Gabinete_Kolink_Void_Black_ARGB_ATX_Vidrio_Templado_f962dc11-grn.jpg',
        precio: 23150
    },
    {
        id: 3,
        name: 'Gabinete ASUS ROG STRIX Helios Aluminum Black RGB',
        image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21594_Gabinete_ASUS_ROG_STRIX_Helios_Aluminum_Black_RGB_81c9ec14-grn.jpg',
        precio: 133020
    },
    {
        id: 4,
        name: 'Gabinete Be Quiet! DARK BASE PRO 900 Black Rev 2',
        image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23033_Gabinete_Be_Quiet__DARK_BASE_PRO_900_Black_Rev_2_56f4864c-grn.jpg',
        precio: 98750
    }
]

const Home = ()=>{
    return(
        <div id={style.Container}>
            <div id={style.productsContainer}>
                <aside>
                    <Sidebar/>
                </aside>
                <section>
                    <Order/>
                    <ContainerCards listArray={productos}/>
                </section>
            </div>

        </div>
        
        
    )
};

export default Home;