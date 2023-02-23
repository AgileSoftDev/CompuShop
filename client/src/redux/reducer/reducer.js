import { SET_STATE_VIEW_CARD, SET_STEP_BUILD_PC, GET_ALL_COMPONENTS, SET_NUM_PAGINATED, SEARCH_COMPONENT, ORDER_PRICE, GET_DETAIL_COMPONENT, FILTER_BY_CATEGORY, DELETE_FILTER_CATEGORY } from "../actions/actions.types";
import { paginationArray } from "../../utils";
import { sortByPrice } from "../../helpers/reducer.helpers";


const initialState = {
    allComponents: [],
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
    categoryPick: undefined,
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
            };

        case FILTER_BY_CATEGORY:
            return{
                ...state,
                allComponents: payload.data,
                paginated:paginationArray(payload.data),
                numPaginado: 0,
                categoryPick:payload.pick
            };

        case DELETE_FILTER_CATEGORY:
            return{
                ...state,
                categoryPick: undefined
            };
        
        default:
            return{
                ...state
            }
    }
};


export default rootReducer;