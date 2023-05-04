import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have Lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ])

  console.log(todos)
  return (
    <>
      <div>
      <h1>To Do List</h1>
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>
      })}
      </div>
    </>
  )
}

export default App
