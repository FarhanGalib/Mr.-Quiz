import { actionTypes } from "../../actionTypes";

const initState = null;

export default function ResultReducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.SET_FINAL_RESULT:
            return action.payload;
        default:
            return state;
    }
}
