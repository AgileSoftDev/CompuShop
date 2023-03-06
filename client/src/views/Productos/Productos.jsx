import style from './Productos.module.css';
import Sidebar from '../../components/SideBar/SideBar.jsx';
import Order from "../../components/Order/Order.jsx"
import ContainerCards from "../../components/CardContainer/ContainerCards.jsx"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllComponents,deleteFilterCategory } from '../../redux/actions/actions.js';
import Paginated from '../../components/Paginated/Paginated';

const Products = ()=>{

    const dispatch = useDispatch();

    const { paginated } = useSelector(store => store)
    const categoryPick = useSelector(s=>s.categoryPick)


    useEffect(() => {
        
        if(!categoryPick) dispatch(getAllComponents())
        // console.log("Rednders demás");
      }, [])
    
//// OJO con que si ponemos en el array de dependencias a 'paginated', se genera un loop de rerenders

    return(
        <div id={style.Container}>
            <div id={style.productsContainer}>
                <aside>
                    <Sidebar/>
                </aside>
                <section>
                    <Order/>
                    {categoryPick && <div id={style.categoryPick}><h2>{categoryPick}</h2> <h3 onClick={()=>{ dispatch(getAllComponents()); dispatch(deleteFilterCategory())}}>X</h3></div>}

                    <ContainerCards listArray={paginated}/>
                    <Paginated/>
                </section>
            </div>
        </div>
        
        
    )
};

export default Products;