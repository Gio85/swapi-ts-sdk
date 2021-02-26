import { ENDPOINT, FORMAT } from '../../../enums'
import { ApiResponse, IHttpClient, IParameters, IPeople, IResourceSchema } from '../../../types'

export class PeopleEndpoint {
  public path = `${ENDPOINT.PEOPLE}`
  constructor(protected readonly client: IHttpClient) {}

  /**
   * This method will return the resource schema
   */
  public getSchema(): ApiResponse<IResourceSchema> {
    return this.client.get<IResourceSchema>(`${this.path}/schema`)
  }

  /**
   * This method will return the people resource
   * @param id
   */
  public read(id: string): ApiResponse<IPeople> {
    return this.client.get(`${this.path}/${id}`)
  }

  /**
   * This method will return the people list
   * Searchable field fot this resource is the `name`
   * @param parameters
   * example { search: 'Luke Skywalker' }
   * This method can also be used to paginate the result
   * example { page: 1 }
   * They can be used together
   */
  public list(parameters?: Partial<IParameters>): ApiResponse<IPeople> {
    if (parameters) {
      return this.client.get<IPeople>(this.path, { ...parameters })
    }
    return this.client.get<IPeople>(this.path)
  }

  /**
   * This method will return the wookie format of the resource
   */
  public getWookiee(id: string): ApiResponse<IPeople> {
    return this.client.get(`${this.path}/${id}`, { format: FORMAT.WOOKIEE })
  }
}
