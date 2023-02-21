import { orderArray } from "../../utils";
import { GET_ALL_COMPONENTS, SET_STATE_VIEW_CARD, SET_STEP_BUILD_PC, SET_NUM_PAGINATED, SEARCH_COMPONENT } from "./actions.types"

export function orderBy(data,option) {
    return (dispatch) => {
        return dispatch({
            type: GET_ALL_COMPONENTS,
            payload: orderArray(data,option),
        })
    }
};

const setStateViewCard = () => {
    return (dispatch) => {
        return dispatch({
                type: SET_STATE_VIEW_CARD,
            })
    }
};

export function searchComponent(recipe) {
    return (dispatch) => {
        return dispatch({
                type: SEARCH_COMPONENT,
                payload: recipe
            })
    }
};

export function numPaginadoChange(num) {
    return (dispatch) => {
        return dispatch({
                type: SET_NUM_PAGINATED,
                payload: num
            })
    }
};

const setStepBuildPc = (step) =>{
    return{
        type: SET_STEP_BUILD_PC,
        payload: step,
    }
}

const getAllComponents = (payload) =>{
    return{
        type: GET_ALL_COMPONENTS,
        payload: payload,
    }
}

export {
     setStateViewCard,
     setStepBuildPc,
     getAllComponents,
};