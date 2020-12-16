import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./navigation/routes";

const App = () => {
  return (
    <div className='App'>
      <h3>Lets do another Project For Fun</h3>
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
