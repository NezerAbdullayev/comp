import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {NavigationProvider} from "./context/navigation";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);




