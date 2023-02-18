import { SET_STATE_VIEW_CARD, SET_STEP_BUILD_PC } from "./actions.types"

const setStateViewCard = () => {
    return (dispatch) => {
        return dispatch({
                type: SET_STATE_VIEW_CARD,
            })
    }
};

const setStepBuildPc = (step) =>{
    return{
        type: SET_STEP_BUILD_PC,
        payload: step,
    }
}

export {
     setStateViewCard,
     setStepBuildPc,
};