import './App.css';
import axios from "axios";
import { useState } from 'react';

function App() {
  const [city,setCity]=useState();
  const [data,setData]=useState();
  const handleChange=(e)=>{
    console.log(e.target.value)
    setCity(e.target.value)
  }

  const handleSubmit=()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=934bb5824ca864c69f012a8c87f2f09e`)
    .then((res)=>{
      console.log(res.data)
      setData(res.data)
      document.getElementById("input").value=""
    })
    .catch((err)=>{console.log(err)})

  }
  return (
    <div>
      <div id="container">
        <input type="text" id="input" placeholder="enter the city" onChange={handleChange} /><br></br>
        <button id="button" onClick={handleSubmit}>Search</button>
      </div>
      <div id="weatherBox">
        <h1>City:{data.name}</h1>
        <h2>Tempearature:{(data.main.temp-273)}</h2>

      </div>
    </div>
  );
}

export default App;
