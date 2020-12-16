import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./navigation/routes";
import Topbar from "./components/topbar";

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Topbar />
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
