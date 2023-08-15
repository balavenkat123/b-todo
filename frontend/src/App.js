import ToDo from './components/ToDo'

function App() {
  return (
    <div className="App">

      <div className="container">
        <h1>To Do Tasks...</h1>
        <div className="top" >
          <input type="text" placeholder="enter task" />
          <div className="add" >Add</div>
        </div>
        <div className="list" >
          {/* <ToDo/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
