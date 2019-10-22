import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  authReducer
});
let middleWare = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, middleWare);

export default store;