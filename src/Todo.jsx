import { useState } from 'react'
import './App.css'

function Todo() {
  const [task, setTask] = useState("");
  const [itemList, setItemList] = useState([])

  function handleChangeInput(event) {
    const inputTask = event.target.value;
    setTask(inputTask);
  }

  function handleAddItemToList(event) {
    event.preventDefault();

    if (!task) {
      return
    };

    setItemList([...itemList, task])
    setTask("")
  }

  return (
    <div className="todo-wrapper">
      <h1>TO-DO</h1>
      <form onSubmit={handleAddItemToList}>
        <input type="text" placeholder='Add new task' onChange={handleChangeInput} value={task} />

        <button type='submit'>Create</button>
      </form>

      <div className='tasks'>
        <p>Created Tasks<span>0</span></p>
        <p>Done Tasks<span>0 de 0</span></p>
      </div>

      <ul className='todo-list'>
        {itemList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo