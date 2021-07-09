import React from "react";
import bacground from "./../src/assets/background.png";
import "./App.css";
import CurrencyClass from "./components/CurrencyClass";

function App() {
  return (
    <div
      className="App"
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${bacground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CurrencyClass />
    </div>
  );
}

export default App;
