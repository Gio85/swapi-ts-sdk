import { ENDPOINT } from '../../../enums'
import { ApiResponse, IHttpClient, IStarship, IStarshipParameters } from '../../../types'

export class StarshipsEndpoint {
  public path = `${ENDPOINT.STARSHIPS}`
  constructor(protected readonly client: IHttpClient) {}

  public read(id: number): ApiResponse<IStarship> {
    return this.client.get(`${this.path}/${id}`)
  }

  public list(parameters?: IStarshipParameters): ApiResponse<IStarship> {
    if (parameters) {
      return this.client.get<IStarship>(this.path, { ...parameters })
    }
    return this.client.get<IStarship>(this.path)
  }
}
