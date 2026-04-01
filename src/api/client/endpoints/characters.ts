import { ENDPOINT } from '../../../enums'
import { ApiResponse, ICharacter, ICharacterParameters, IHttpClient } from '../../../types'

export class CharactersEndpoint {
  public path = `${ENDPOINT.CHARACTERS}`
  constructor(protected readonly client: IHttpClient) {}

  public read(id: number): ApiResponse<ICharacter> {
    return this.client.get(`${this.path}/${id}`)
  }

  public list(parameters?: ICharacterParameters): ApiResponse<ICharacter> {
    if (parameters) {
      return this.client.get<ICharacter>(this.path, { ...parameters })
    }
    return this.client.get<ICharacter>(this.path)
  }
}
