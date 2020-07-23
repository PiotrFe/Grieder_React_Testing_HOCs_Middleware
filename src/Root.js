import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers"; // if we provide directory name only, node will be default import index.js file

export default (props) => {
  return (
    <Provider store={createStore(reducers, {})}>{props.children}</Provider>
  );
};
