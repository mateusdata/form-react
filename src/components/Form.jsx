import { React, useState } from "react";
import { Button, TextField } from "@mui/material";

function Form({ formHandler }) {
  const [text, setText] = useState("");
  //const [resultado, setResultado] = useState("")

  function pegarInput(e) {
    e.preventDefault();
    formHandler(text);
    document.getElementById("outlined-basic").value = null
    
    //setResultado(text)
  }

  return (

    <form onSubmit={pegarInput}>
      <TextField
      
        onChange={(e) => setText(e.target.value)}
        style={{ marinLeft: "2px" }}
        id="outlined-basic"
        label="Pegar o Input"
        variant="outlined"
      />

      <Button 
      className="xx"
        type="submit"
        style={{ margin: "2px 1px 0px 5px ", padding: "1.5vh"}}
        variant="contained"
      >
        Pega Input
      </Button>
      {/*resultado*/}
    </form>
  );
}

export default Form;
