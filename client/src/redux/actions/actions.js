import { GET_ALL_COMPONENTS, SET_STATE_VIEW_CARD, SET_STEP_BUILD_PC, SET_NUM_PAGINATED, SEARCH_COMPONENT, ORDER_PRICE, GET_DETAIL_COMPONENT } from "./actions.types"
import axios from 'axios'



const orderBy = (tipo) => {
        return async (dispatch)=>{
            const {data}  = await axios.get('http://localhost:3001/components');
            dispatch({type: ORDER_PRICE,payload: {
                tipo,
                data
            },
            })
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
        const {data} = await axios.get('http://localhost:3001/components')
        .catch(error => alert("Error en la action getAllComponents, al obtener la data"));
                dispatch({
                    type: GET_ALL_COMPONENTS,
                    payload: data,
            })
         
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
};