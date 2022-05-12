import { createStore, applyMiddleware, combineReducers, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import AuthReducer from "./reducers/AuthReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducers = combineReducers({
   AuthReducer 
});

const middlewares = [thunkMiddleware]; 
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middlewares)));
console.log(store);
export default store;