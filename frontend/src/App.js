import React from 'react'
import ToDo from './components/ToDo.js'

function App() {
  return (
    <div className="App">
      

      <div className="container">
        <h1>To Do Tasks...</h1>
        <div className="top" >
          <input type="text" placeholder="enter task" />
          <div className="add" >Add</div>
        </div>
        <div className="list">
          <ToDo text="hiii hello"/>
          <ToDo text="hiii hello"/>
          <ToDo text="hiii hello"/>
          <ToDo text="hiii hello"/>
        </div>
      </div>
    </div>
  );
}

export default App;
