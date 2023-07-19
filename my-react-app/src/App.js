import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [names,setNames] = useState(["html"]);
  const nameArray = names.map(function(name){
    return (<p>{name}</p>);
  });

  function addName(){
    let name = document.getElementById("name").value;
    setNames(function(prevname){
      return [...prevname,name];
    });
  }
  return (
    <>
      <input type="text" id="name" />
      <button onClick={addName} className='btn btn-warning'>Add</button>
      <div>{nameArray}</div>
    </>
  );
}

export default App;
