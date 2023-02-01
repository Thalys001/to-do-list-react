import { useState } from 'react'
import './App.css'

function Todo() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>TO-DO</h1>
      <form>
      <input type="text"  placeholder='Adicone uma tarefa'/>
      <button>Criar</button>
      <div className='task-created'>
      <p> Tarefas criadas <span>0 de 0</span></p>
      <p>Conclúidas <span>0 de 0</span></p>
      </div>
      </form>
    </div>
  )
}

export default Todo

{/* <div className="card">
  <button>Adicionar</button>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p> */}