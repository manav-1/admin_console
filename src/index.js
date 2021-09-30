import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import Chat from "./components/screens/Chat";

import reportWebVitals from "./reportWebVitals";
Kommunicate.init("39edc752b6f62edc078c926727718eefc", {
  popupWidget: true,
  automaticChatOpenOnNavigation: true,
});
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Chat />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
