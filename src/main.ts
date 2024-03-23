import { $searchUser } from "./utils/elements"
import { getRepositories } from "./helpers/getRepositories"
import { getUser } from "./helpers/getUser"
import { setRespositories } from "./helpers/setRepositories"
import { setUser } from "./helpers/setUser"

export const searchUser = async (userName: string) => {
  try {
    const userData = await getUser(userName)
    const repositoriesData = await getRepositories(userName)

    setUser(userData)
    setRespositories(repositoriesData)
  } catch (error) {
    alert('Este usuario no existe')
  }
}

$searchUser.addEventListener('search', () => searchUser($searchUser.value))

searchUser('github')