import React from "react";
import Home from "./components/pages/home";
import "./assets/css/style.scss";
import Router from "./router";

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;
