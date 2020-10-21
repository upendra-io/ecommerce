import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { productListReducer } from "../reducers/productReducer";

const initialState = {};

const reducer = combineReducers({
  productList: productListReducer,
});

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
