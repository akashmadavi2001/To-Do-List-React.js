import { useState } from 'react';
import './App.css';

function App() {
  let [todolist, setToDoList] = useState([]);

  let saveToDoList = (event) => {
    let toname = event.target.toname.value;
    if (!todolist.includes(toname)) {
      let finalDoList = [...todolist, toname]
      setToDoList(finalDoList);
      event.target.toname.value = "";
    }
    else {
      alert("To do name Allready exists...");
    }
    event.preventDefault();
  }
  let list = todolist.map((value, index) => {
    return (
      <ToDoListItem value={value} key={index} indexNumber={index} todolist={todolist} setToDoList={setToDoList} />
    )
  })
  return (
    <div className="App">
      <div className="top-input">
        <h4>To-Do List 📝</h4>
        <form className="inputbox" onSubmit={saveToDoList}>
          <input className='input' type="text" name='toname' placeholder="Add your task" /><button className='button'>Add</button>
        </form>
      </div>
      <div className="listbox">
        <ul className='ul'>
          {list}
        </ul>
      </div>
    </div>
  );
}

function ToDoListItem({ value, indexNumber, todolist, setToDoList }) {
  let [status, setstatus] = useState(false);
  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i !== indexNumber)
    setToDoList(finalData);
  }
  let checkedStatus = () => {
    setstatus(!status)
  }
  return (
    <li className={`li ${(status) ? 'checked' : ''}`} onClick={checkedStatus}> {value}<span onClick={deleteRow}>×</span></li>
  )
}

export default App;
