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
