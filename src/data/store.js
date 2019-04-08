import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import initial from "./initial";

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const createStoreWithMiddleware = applyMiddleware(
    thunk,
)(createStore);

const store = createStoreWithMiddleware(reducer, initial, reduxDevTools());

export default store;

