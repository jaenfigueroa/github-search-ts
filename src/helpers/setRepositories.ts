import { $cardContainer } from "../utils/elements"
import Repository from "../types/repository"

export const setRespositories = (repositories: Repository[]) => {
  let templates = ''

  repositories.forEach((repository: any) => {
    const template = `
    <a class="card" href="${repository.url}" target="_blank" title="Ver respositorio en Github">
      <h3>${repository.name}</h3>
      <p>${repository.description}</p>
      <ul>
        <li>
          <i class="fa-regular fa-id-badge"></i>
          ${repository.license}
        </li>
        <li>
          <i class="fa-solid fa-code-fork"></i>
          ${repository.forks}
        </li>
        <li>
          <i class="fa-regular fa-star"></i>
          ${repository.stars}
        </li>
      </ul>
    </a>
      `
    templates += template
  })

  $cardContainer.innerHTML = templates
}
