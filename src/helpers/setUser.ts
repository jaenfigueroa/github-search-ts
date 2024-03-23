import { $profileDescription, $profileFollowers, $profileFollowing, $profileImg, $profileLocation, $profileName, $profileUsername } from "../utils/elements"
import User from "../types/user"

export const setUser = (user: User) => {
  $profileImg.src = user.image
  $profileName.textContent = user.name || ''
  $profileName.href = user.url || ''
  $profileUsername.textContent = `@${user.userName}`  || ''
  $profileUsername.href = user.url || ''
  $profileDescription.textContent = user.description || 'No hay descripción disponible'
  $profileFollowers.textContent = String(user.followers) || '0'
  $profileFollowing.textContent = String(user.following) || '0'
  $profileLocation.textContent = user.location || 'No disponible'
}