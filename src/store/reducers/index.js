import { combineReducers } from 'redux';
import formValueReducer from './FormValueReducer';
import LoaderReducer from './LoaderReducer';
import questionReducer from './QuestionReducer';
import ResultReducer from './ResultReducer';
import SubmittedAnswersReducer from './ShowAnswers';


export const rootReducer = combineReducers({
    formValueReducer,
    LoaderReducer,
    questionReducer,
    ResultReducer,
    SubmittedAnswersReducer,
}); 