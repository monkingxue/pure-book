import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "remote-redux-devtools";
import thunk from "redux-thunk";

import {rootReducer} from "./reducer";

const middlewares = [thunk];

/**
 * create the root store of app
 * @type {Store<S>}
 */
export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(
    applyMiddleware(...middlewares),
  )
);