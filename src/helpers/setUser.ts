import { $profileDescription, $profileFollowers, $profileFollowing, $profileImg, $profileLocation, $profileName } from "../utils/elements"
import User from "../types/user"

export const setUser = (user: User) => {
  $profileImg.src = user.image
  $profileName.textContent = user.name || 'Este usuario no existe'
  $profileName.href = user.url || '#'
  $profileDescription.textContent = user.description || 'No hay descripción disponible'
  $profileFollowers.textContent = String(user.followers) || '0'
  $profileFollowing.textContent = String(user.following) || '0'
  $profileLocation.textContent = user.location || 'No disponible'
}