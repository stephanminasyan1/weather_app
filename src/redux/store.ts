import { createStore, compose, applyMiddleware } from "redux";
import weatherReducer from "./reducers";
import thunk from "redux-thunk";

const middleware = [thunk];

// @ts-ignore
const composeEnhancers = compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(weatherReducer, enhancer);
export default store;
