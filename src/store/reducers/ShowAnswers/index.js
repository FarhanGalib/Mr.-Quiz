import { actionTypes } from "../../actionTypes";

const initState = [];

export default function SubmittedAnswersReducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.SET_SUBMITTED_ANSWERS:
            return [...state, action.payload];
            case actionTypes.RESET_SUBMITTED_ANSWERS:
            return [];
        default:
            return state;
    }
}
