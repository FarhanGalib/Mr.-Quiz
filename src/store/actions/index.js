import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { actionTypes } from "../actionTypes";

//loader setter
export const setLoader = (value) => ({
    type: actionTypes.SET_LOADER,
    payload: value,
});


//category setter
export const setCategory = (category) => ({
    type: actionTypes.SET_CATEGORY_VALUE,
    payload: category,
});

//category setter
export const setDifficulty = (difficulty) => ({
    type: actionTypes.SET_DIFFICULTY_VALUE,
    payload: difficulty,
});



//questionList setter
export const setQuestionList = (questions) => ({
    type: actionTypes.SET_QUESTION_LIST,
    payload: questions,
})


//fetch questions
export const fetchQuestions = () => {
    return async (dispatch, getState) => {
        dispatch(setLoader(true));
        const { category, difficulty } = getState().formValueReducer;
        const { data } = await axios.get(
            `${BASE_URL}amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
        );
        dispatch(setLoader(false));
        dispatch(setQuestionList(data.results));
        
    };
};
