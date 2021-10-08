import { actionTypes } from "../../actionTypes";

const initState = {
    category: "",
    difficulty: "",
};

export default function formValueReducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.SET_CATEGORY_VALUE:
            return { ...state, category: action.payload };
        case actionTypes.SET_DIFFICULTY_VALUE:
            return { ...state, difficulty: action.payload };
        default: return state;
    }
}
