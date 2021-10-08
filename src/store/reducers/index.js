import {combineReducers} from 'redux';
import formValueReducer from './FormValueReducer';
import LoaderReducer from './LoaderReducer';
import questionReducer from './QuestionReducer';


export const rootReducer = combineReducers({
    formValueReducer,
    LoaderReducer,
    questionReducer
}); 