import React from "react";
import "./App.css";
import CurrencyClass from "./components/CurrencyClass";
import { Favorites } from "./components/Favorites";

function App() {
  return (

    <div className="container ">
    <div
      className="App"
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "gray" ,
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
