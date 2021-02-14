import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

let defaultState = [
  { id: 0, name: "username", quan: 2 },
  { id: 1, name: "kiwi", quan: 4 },
  { id: 2, name: "hihi", quan: 3 },
  { id: 3, name: "Sally", quan: 2 },
];

function reducer(state = defaultState, action) {
  //데이터 수정하는 함수, 항상 state를 리턴함
  if (action.type === "countUp") {
    let copy = [...state];
    copy[0].quan++;
    return copy;
  } else if (action.type === "countDown") {
    let copy = [...state];
    copy[0].quan--;
    return copy;
  } else {
    return state;
  }
}

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
