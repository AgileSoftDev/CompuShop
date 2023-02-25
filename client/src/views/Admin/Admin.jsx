import Dashboard from '../../components/Dashboard/Dashboard'
import style from '../Admin/Admin.module.css';

const Admin = ()=>{
    return(
        <div id={style.Container}>
            <div id={style.productsContainer}>
                <aside>
                    <Dashboard/>
                </aside>
            </div>
         </div>
    )
};

export default Admin;