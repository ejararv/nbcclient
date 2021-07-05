import React from "react";
import bacground from './../src/assets/background.png'
import "./App.css";
import CurrencyClass from "./components/CurrencyClass";
import {Card} from './components/Card'


function App() {
  return (
    
   <div className="App"
   style={{
     width: '100vw',
     height: '100vh',
     backgroundImage: `url(${bacground})`,
     backgroundPosition:'center',
     backgroundSize:'cover',
     backgroundRepeat: 'no-repeat',
     display: 'flex',
     alignItems: 'center',
     justifyContent:'center'
   }}>  
     <CurrencyClass></CurrencyClass>
    </div>
  

   
  )
}

export default App;
