import { applyMiddleware, combineReducers, createStore } from "redux";
import { cashReducer } from "./cashReduser";
import { customerReducer } from "./customerReduser";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const rootReduser = combineReducers({ cashReducer, customerReducer });
export const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(thunk))
);
