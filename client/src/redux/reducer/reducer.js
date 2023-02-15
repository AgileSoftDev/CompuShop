import { SET_STATE_VIEW_CARD } from "../actions/actions.types";


const initialState = {
    connectionON : true,
    stateViewCard: false,
}


const rootReducer = (state = initialState, { type, payload }) =>{
    switch (type) {
        case SET_STATE_VIEW_CARD:
            return {
                ...state,
                stateViewCard: payload
            }
        
        default:
            return{
                ...state
            }
    }
};


export default rootReducer;