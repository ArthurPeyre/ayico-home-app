import { api } from "./api"
import type { User, UserCreate } from "../types/user"

export async function createUser(user: UserCreate): Promise<User> {
  const response = await api.post<User>("/users", user)
  return response.data
}

export async function getUsers(): Promise<User[]> {
  try {
    const response = await api.get<User[]>("/users")
    return response.data
  } catch (error: any) {
    console.error("Erreur lors de la récupération des utilisateurs :", error.response?.data || error.message)
    return []
  }
}