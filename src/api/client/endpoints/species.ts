import { ENDPOINT } from '../../../enums'
import { ApiResponse, IHttpClient, ISpecie, ISpeciesParameters } from '../../../types'

export class SpeciesEndpoint {
  public path = `${ENDPOINT.SPECIES}`
  constructor(protected readonly client: IHttpClient) {}

  public read(id: number): ApiResponse<ISpecie> {
    return this.client.get(`${this.path}/${id}`)
  }

  public list(parameters?: ISpeciesParameters): ApiResponse<ISpecie> {
    if (parameters) {
      return this.client.get<ISpecie>(this.path, { ...parameters })
    }
    return this.client.get<ISpecie>(this.path)
  }
}
