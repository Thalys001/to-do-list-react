import { useState } from 'react'

import List from './compomemts/List';
import Form from './compomemts/Form';
import Input from './compomemts/Input';
import Button from './compomemts/Button';

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


      <Form onSubmit={handleAddItemToList}>

        <input type="text" placeholder='Add new task' onChange={handleChangeInput} value={task} />
        
        <Button type='submit'>Create</Button>
      
      </Form>

      <div className='tasks'>
        <p>Created Tasks<span>0</span></p>
        <p>Done Tasks<span>0 de 0</span></p>
      </div>
      
      <List itemList={itemList}/>
    </div>
  )
}

export default Todo