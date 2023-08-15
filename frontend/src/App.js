import {useEffect, useState} from 'react'
import ToDo from './components/ToDo.js'
import { getAllToDo } from './utils/HandleApi.js'

function App() {

  const [toDo,setToDo] = useState([])
  useEffect(()=>{
    getAllToDo(setToDo)
  },[])
  return (
    <div className="App">
      

      <div className="container">
        <h1>To Do Tasks...</h1>
        <div className="top" >
          <input type="text" placeholder="enter task" />
          <div className="add" >Add</div>
        </div>
        <div className="list">
          {toDo.map((item)=> <ToDo key={item._id} text={item.text}/>)}
          
        </div>
      </div>
    </div>
  );
}

export default App;
