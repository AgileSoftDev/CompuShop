import { SET_STATE_VIEW_CARD, SET_STEP_BUILD_PC } from "../actions/actions.types";

 

const initialState = {
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
            }

        case SET_STEP_BUILD_PC:
            return{
                ...state,
                step_build_pc:payload,
            }
        
        default:
            return{
                ...state
            }
    }
};


export default rootReducer;