import { actionTypes } from "../../actionTypes";

const initState = [];

export default function questionReducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.SET_QUESTION_LIST:
            return action.payload;
        default:
            return state;
    }
}
