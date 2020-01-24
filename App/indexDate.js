import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";

const store = createStore();
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
