import { SET_STATE_VIEW_CARD, SET_STEP_BUILD_PC, GET_ALL_COMPONENTS, SET_NUM_PAGINATED, SEARCH_COMPONENT, ORDER_PRICE, GET_DETAIL_COMPONENT } from "../actions/actions.types";
import axios from 'axios';
import { paginationArray } from "../../utils";
import { sortByPrice } from "../../helpers/reducer.helpers";


const actions = require('../actions/actions');


export const getAllComponents = () => {
    return dispatch => {
        axios.get('http://localhost:3001/components')
            .then(res => {
                dispatch(actions.getAllComponents(res.data));
            })
            .catch(error => console.log(error));
    }
}

export const getDetailComponentById = (id) => {
    return dispatch => {
        axios.get(`http://localhost:3001/components/id/${id}`)
            .then(res => {
                dispatch(actions.getDetailComponent(res.data));
            })
            .catch(error => console.log(error));
    }
}

const initialState = {
    allComponents: [],
    detailComponent: {},
    numPaginado: 0,
    paginated: [],
    connectionON : true,
    stateViewCard: window.localStorage.getItem("viewCarStyle")===null?true:window.localStorage.getItem("viewCarStyle")==='true'?true:false,
    buil_pc : {
        cpu: undefined,
        motherBoard: undefined,
        cooler: undefined,
        ram: undefined,
        gpu:undefined,
        storaged: undefined,
        psu: undefined,
        case: undefined,
        screen: undefined,
        peripherals:{}
    },
    step_build_pc:undefined,
}


const rootReducer = (state = initialState, { type, payload }) =>{
    switch (type) {
        case SET_STATE_VIEW_CARD:
            return {
                ...state,
                stateViewCard: !state.stateViewCard,
            };

        case SET_STEP_BUILD_PC:
            return{
                ...state,
                step_build_pc:payload,
            };

        case SET_NUM_PAGINATED:
            return{
                ...state,
                numPaginado: payload,
            };

        case SEARCH_COMPONENT:
                return {
                    ...state,
                    paginated: paginationArray(
                        state.allComponents.filter(item => 
                            item.name.slice(0, payload.trim().length).toLowerCase() === payload.trim().toLowerCase()
                        ), 15),
                    numPaginado: 0,
                };
        
        case GET_ALL_COMPONENTS:
            return{
                ...state,
                allComponents: payload,
                paginated: paginationArray(payload, 9),
            };
        case GET_DETAIL_COMPONENT:
            return{
                ...state,
                detailComponent: payload,
            };

        case ORDER_PRICE:
   
            const newOrder = sortByPrice(payload.data, payload.tipo)
            return{
                ...state
                , allComponents: newOrder,
                paginated: paginationArray(newOrder, 9),
                numPaginado:0
            }
        
        default:
            return{
                ...state
            }
    }
};


export default rootReducer;