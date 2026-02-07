import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
import './App.css'
import { getUsers } from './api/users'
import type { User } from './types/user'


function App() {
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
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
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
