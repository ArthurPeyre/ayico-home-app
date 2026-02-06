import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getUsers } from './api/users'
import type { User } from './types/user'


function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState<User[]>([])

  const fetchUsers = async () => {
    try {
      const tabUsers = await getUsers()
      setUsers(tabUsers)
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs :", error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            n°{user.id} {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
