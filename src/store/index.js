import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/authReducer";
import cartReducer from "./cart/cartReducer";


let reducers = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
