import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutingPages from "./RoutingPages";

function App() {
  return (
    <BrowserRouter>
      <RoutingPages />
    </BrowserRouter>
  );
}

export default App;
