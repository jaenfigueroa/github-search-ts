import { $buttonRandom, $buttonSearch, $closeDialog, $dialog, $searchUser } from './utils/elements'
import { getRepositories } from './helpers/getRepositories'
import { getUser } from './helpers/getUser'
import { setRespositories } from './helpers/setRepositories'
import { setUser } from './helpers/setUser'
import { getUsernameRandom } from './helpers/getUsernameRandom'

export const searchUser = async (userName: string) => {
  const userData = await getUser(userName)
  const repositoriesData = await getRepositories(userName)

  if (userData.exist) {
    setUser(userData)
    setRespositories(repositoriesData)
  } else {
    $dialog.showModal();
    $closeDialog.addEventListener('click', () => $dialog.close())
  }
}

$searchUser.addEventListener('search', () => $searchUser.value && searchUser($searchUser.value))
$buttonSearch.addEventListener('click', () => $searchUser.value && searchUser($searchUser.value))
$buttonRandom.addEventListener('click', async () => searchUser(await getUsernameRandom()))

searchUser('github')

