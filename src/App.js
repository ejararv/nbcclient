import React from "react";
import "./App.css";
import CurrencyClass from "./components/CurrencyClass";


function App() {
  return (

    <div className="container ">
    <div
      className="App"
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(#0F2027,#203A43,#2C5364)", 
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
     
      <CurrencyClass />
      
    </div>
    </div>

    
  );
}

export default App;
