import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Call from "./components/Session/Session";
import Main from './container/Main';
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
       <Main/>
      </BrowserRouter>
    </div>
  );
};

export default App;
