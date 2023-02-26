import { GET_ALL_COMPONENTS, SET_STATE_VIEW_CARD, SET_STEP_BUILD_PC, SET_NUM_PAGINATED, SEARCH_COMPONENT, ORDER_PRICE, GET_DETAIL_COMPONENT, FILTER_BY_CATEGORY, DELETE_FILTER_CATEGORY, PICK_ARMA_TU_PC, CLEAN_ARMA_TU_PC, EDIT_USER } from "./actions.types"
import axios from 'axios'
import { filterCategoryParams } from "../../helpers/Filter.helpers";



const orderBy = (tipo ,categoryPick) => {
    if(!categoryPick){
        return async (dispatch)=>{
            const {data}  = await axios.get('http://localhost:3001/components');
            dispatch({type: ORDER_PRICE,payload: {
                tipo,
                data
            },
            })
        }
    }else{
        return async dispatch =>{
            const [category,marca] = filterCategoryParams(categoryPick)
            let {data} = await axios.get(`http://localhost:3001/components/${category}`).catch(e=>{alert(`No Econtró componentes con la categoría ${category}`); return "no data"})

            if(marca){
                data = data.filter(e=>e.description.toLowerCase().includes(marca.toLowerCase()))
            }
    
            if(!data.length) alert("No Hay componentes con esa marca")
            else if(data.length)  dispatch({type: ORDER_PRICE,payload: {
                tipo,
                data
            },
            })
        }
    }
};


const setStateViewCard = () => {
        return { type: SET_STATE_VIEW_CARD }
    
};

const getDetailComponent = (component) => {
    return {
        type: GET_DETAIL_COMPONENT,
        payload: component
    }
};


function searchComponent(component) {
        return {
                type: SEARCH_COMPONENT,
                payload: component
            }
};


 function numPaginadoChange(num) {
        return {
                type: SET_NUM_PAGINATED,
                payload: num
            }

};


const setStepBuildPc = (step) =>{
    return{
        type: SET_STEP_BUILD_PC,
        payload: step,
    }
}



 const getAllComponents = () => {
    return async dispatch => {
        const ddd = "http://localhost:3001/components"
        const {data} = await axios.get(ddd)
        .catch(error => alert("Error en la action getAllComponents, al obtener la data"));
                dispatch({
                    type: GET_ALL_COMPONENTS,
                    payload: data,
            })
         
    }
}


const filterByCategory = (category, marca, pick)=>{
    return async dispatch =>{
        let {data} = await axios.get(`http://localhost:3001/components/${category}`).catch(e=>{alert(`No Econtró componentes con la categoría ${category}`); return "no data"})
        if(marca){
            data = data.filter(e=>e.description.toLowerCase().includes(marca.toLowerCase()))
        }

        if(!data.length) alert("No Hay componentes con esa marca")
        else if(data.length) dispatch({type: FILTER_BY_CATEGORY, payload: {data,pick}})
    }
};

const deleteFilterCategory= ()=> {
    return {type:DELETE_FILTER_CATEGORY}
}


const pickArmaTuPc = (payload) =>{
    return {type:PICK_ARMA_TU_PC, payload}
}

const cleanArmaTuPc = () =>{
    return {type: CLEAN_ARMA_TU_PC}
}

const editUser = (email, props) =>{
    return async function(dispatch) {
        console.log(email);
        console.log(props);
        try {
            const res = await axios.put(`http://localhost:3001/user?email=${email}`, props);
            return dispatch({
                type:"EDIT_USER",
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export {
     setStateViewCard,
     setStepBuildPc,
     getAllComponents,
     numPaginadoChange,
     searchComponent,
     orderBy,
     getDetailComponent,
     filterByCategory,
     deleteFilterCategory,
     pickArmaTuPc,
     cleanArmaTuPc,
     editUser
};