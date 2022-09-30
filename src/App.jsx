import { React, useState } from 'react';
import './App.css';
import Form from './components/Form'

function App() {
  const [output, setOutput] = useState("");

  return (
    <div style={{ border: "2px solid rgb(37, 150, 190)", paddingTop: "2em", width:"97%"}} className="App">
      <Form formHandler={(value) => setOutput(value)} />

      <h1 style={{}}>Bem-vindo <br /> {output}</h1>
    </div>
  );
}

export default App;
