import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import  thunk  from "redux-thunk";


const composeEnhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, composeEnhancer);
