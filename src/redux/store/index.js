import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer } from "../reducers/countReducer";
import { colorReducer } from "../reducers/colorReducer";
import { authProcess } from "../reducers/authReducer";
import thunk from "redux-thunk";

let allReducers = combineReducers({
  count: reducer,
  color: colorReducer,
  authProcess: authProcess,
});

// export const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));
