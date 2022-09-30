import { React, useState } from 'react';
import './App.css';
import { Button, TextField } from '@mui/material';


function App() {
  const [number, setNumber] = useState(null);
  function MegaSena(){
    setNumber(number)
    console.log(number)
  }
  
  return (
    <div style={{ border: "2px solid rgb(37, 150, 190)", paddingTop: "2em" }} className="App">
      <form action="">

        <TextField type="submit" onSubmit={(e) => setNumber(e.target.value)}  style={{ marinLeft: "2px" }} id="outlined-basic" label="Pegar o Input" variant="outlined" />


        <Button onClick={MegaSena} style={{ margin: "2px 1px 0px 5px ", padding: "2.2vh" }} variant="contained">Outlined</Button>

      </form>


      {<h1>Bem-vindo <br /> {number}</h1>}

    </div>
  );
}

export default App;
