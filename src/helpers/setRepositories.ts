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
        <li title="Licencia">
          <i class="fa-regular fa-id-badge"></i>
          ${repository.license}
        </li>
        <li title="Forks">
          <i class="fa-solid fa-code-fork"></i>
          ${repository.forks}
        </li>
        <li title="Estrellas">
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
