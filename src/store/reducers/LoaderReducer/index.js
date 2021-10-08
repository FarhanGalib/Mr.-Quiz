import { actionTypes } from "../../actionTypes";

const initState = false;

export default function LoaderReducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.SET_LOADER:
            return action.payload;
        default:
            return state;
    }
}
