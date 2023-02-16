import { SET_STATE_VIEW_CARD } from "../actions/actions.types";


const initialState = {
    connectionON : true,
    stateViewCard: true,
}


const rootReducer = (state = initialState, { type, payload }) =>{
    switch (type) {
        case SET_STATE_VIEW_CARD:
            return {
                ...state,
                stateViewCard: !state.stateViewCard,
            }
        
        default:
            return{
                ...state
            }
    }
};


export default rootReducer;