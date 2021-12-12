import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Recipe from './components/Recipe';

function App() {
  const [search,setSearch]=useState("")

  const onInputChange= e => {
    setSearch(e.target.value)
    console.log(e.target.value);
    
  };
  return (
    <div className="App">     
      <Header search={search} onInputChange={onInputChange}/>
      <Recipe />     
    </div>
  );
}

export default App;
