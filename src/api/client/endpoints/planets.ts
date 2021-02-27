import { ENDPOINT, FORMAT } from '../../../enums'
import { ApiResponse, IHttpClient, IParameters, IPlanet, IResourceSchema } from '../../../types'

export class PlanetsEndpoint {
  public path = `${ENDPOINT.PLANETS}`
  constructor(protected readonly client: IHttpClient) {}

  /**
   * This method will return the resource schema
   */
  public getSchema(): ApiResponse<IResourceSchema> {
    return this.client.get<IResourceSchema>(`${this.path}/schema`)
  }

  /**
   * This method will return the planets resource
   * @param id
   */
  public read(id: string): ApiResponse<IPlanet> {
    return this.client.get(`${this.path}/${id}`)
  }

  /**
   * This method will return the planets list
   * Searchable field fot this resource is the `name`
   * @param parameters
   * example { search: 'Tatooine' }
   * This method can also be used to paginate the result
   * example { page: 1 }
   * They can be used together
   */
  public list(parameters?: Partial<IParameters>): ApiResponse<IPlanet> {
    if (parameters) {
      return this.client.get<IPlanet>(this.path, { ...parameters })
    }
    return this.client.get<IPlanet>(this.path)
  }

  /**
   * This method will return the wookie format of the resource
   */
  public getWookiee(id: string): ApiResponse<IPlanet> {
    return this.client.get(`${this.path}/${id}`, { format: FORMAT.WOOKIEE })
  }
}