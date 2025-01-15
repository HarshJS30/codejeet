import React from "react";
import CurrencyConverter from "./components/CurrencyConverter";
import './App.css'
import Navbar from "./components/Navbar";

function App(){
  return (
    <>
      <div className="main-content">
        < Navbar /> 
        < CurrencyConverter />
      </div>
    </>
  )
}

export default App;
