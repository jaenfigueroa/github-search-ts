import User from "../types/user"
import { API_BASE_URL } from "../utils/variables"

export const getUser = async (username: string):Promise<User> => {
  const response = await fetch(`${API_BASE_URL}/users/${username}`)
  const data = await response.json()

  return {
    exist: response.status === 200,
    name: data.name,
    userName: data.login,
    description: data.bio,
    followers: data.followers,
    following: data.following,
    location: data.location,
    image: data.avatar_url,
    url: data.html_url
  }
}