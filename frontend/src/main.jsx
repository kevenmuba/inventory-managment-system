import React from "react";
import ReactDOM from "react-dom/client"; // Import from react-dom/client
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App"; // Your main app component
import "./index.css";

import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const rootElement = document.getElementById("root"); // Get the root element
const root = ReactDOM.createRoot(rootElement); // Create a root

root.render(
  <>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
    <ToastContainer />
  </>
);
