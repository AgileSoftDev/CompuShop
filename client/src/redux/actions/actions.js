import { SET_STATE_VIEW_CARD } from "./actions.types"

const setStateViewCard = () => {
    return (dispatch) => {
        return dispatch({
                type: SET_STATE_VIEW_CARD,
            })
    }
};

export default setStateViewCard;