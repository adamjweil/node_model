import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtooks-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import ReduxThunk from "redux-thunk";
import reducers from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;