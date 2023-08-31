import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Main_Routes from "./Routes/Routes";

function App() {
  return (
    <Router>
      <Main_Routes />
    </Router>
  );
}

export default App;
