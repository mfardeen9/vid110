import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: "hello",
      desc:"Welome"
    },
    {
      title: "hello1",
      desc:"Welome1"
    },
    {
      title: "hello2",
      desc:"Welome2"
    }
  ])

  const Todo = ({todo}) => {
    return (<>
    <div className='todo'>{todo.title}</div>
    <div className='todo'>{todo.desc}</div>

    </>)
    }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn ? <button>show btn is True</button> : <button>show btn is False</button>}
      {/* {showbtn && <button>show btn is true</button>} */}

      {todos.map(todo=>{
        return <Todo key={todo.title} todo={todo}/>
      })}

      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
