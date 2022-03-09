import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import User from "./User"
import Student from "./Student";
import Form from './Form';
import Cl from './Classsss'

function App() {

   const [name, setData] = useState(null); /// creating the state
   const [print,setPrint] = useState(false)

   function updateData(val) {
     setData(val.target.value) //callling the state
     setData(false)
   }
  return (
    <div className="App">
       
        <Cl />

      {/* <Student name={name}/> */}
      {/* <button onClick={updateData}>Change</button> */}

     {/* //here we have to only reference  the function  */}
    </div>
  );
}

export default App;
