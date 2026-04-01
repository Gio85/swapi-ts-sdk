import { ENDPOINT } from '../../../enums'
import { ApiResponse, IHttpClient, IPlanet, IPlanetParameters } from '../../../types'

export class PlanetsEndpoint {
  public path = `${ENDPOINT.PLANETS}`
  constructor(protected readonly client: IHttpClient) {}

  public read(id: number): ApiResponse<IPlanet> {
    return this.client.get(`${this.path}/${id}`)
  }

  public list(parameters?: IPlanetParameters): ApiResponse<IPlanet> {
    if (parameters) {
      return this.client.get<IPlanet>(this.path, { ...parameters })
    }
    return this.client.get<IPlanet>(this.path)
  }
}
