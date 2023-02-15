import { SET_STATE_VIEW_CARD } from "./actions.types"

export function setStateViewCard(payload) {
    return (dispatch) => {
        return dispatch({
                type: SET_STATE_VIEW_CARD,
                payload: payload
            })
    }
};