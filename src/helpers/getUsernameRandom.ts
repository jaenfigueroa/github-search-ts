import { generateNumber } from "./generateNumber";
import { getUser } from "./getUser";

export const getUsernameRandom = async (): Promise<string> => {

  while (true) {
    const page =  generateNumber(1, 4_000_000)
    const item = generateNumber(1, 30)
    
    const response = await fetch(`https://api.github.com/users?since=${page}`)
    const data = await response.json()
  
    const usernameRandom = data[item].login
    const userData = await getUser(usernameRandom)

    if (userData.exist) {
      return usernameRandom
    }
  }
}