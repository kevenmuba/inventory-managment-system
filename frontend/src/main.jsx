import React from "react";
import ReactDOM from "react-dom/client"; // Import from react-dom/client
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App"; // Your main app component
import "./index.css";

const rootElement = document.getElementById("root"); // Get the root element
const root = ReactDOM.createRoot(rootElement); // Create a root

root.render(
  <Router>
    <App />
  </Router>
);
