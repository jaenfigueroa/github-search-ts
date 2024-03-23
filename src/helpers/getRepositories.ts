import Repository from '../types/repository'
import { API_BASE_URL } from '../utils/variables'

export const getRepositories = async (username: string): Promise<Repository[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${username}/repos`)
    const data = await response.json()
  
    const repositories = data.map((repo: any) => ({
      url: repo.html_url,
      name: repo.name,
      description: repo.description,
      license: repo.license ? repo.license.name : 'No tiene',
      forks: repo.forks || 0,
      stars: repo.stargazers_count || 0,
    }))
  
    return repositories
  } catch (error) {
    return []
  }
}
