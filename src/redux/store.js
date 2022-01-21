import { createStore } from "redux";
import reducers from "./reducer/index";

let store = null;
store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const getStore = () => {
  if (store == null) {
    store = createStore(
      reducers,
      {},
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }
};

export default store;
