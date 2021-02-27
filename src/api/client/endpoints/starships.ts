import { ENDPOINT } from '../../../enums'
import { ApiResponse, IHttpClient, IParameters, IResourceSchema, IStarship } from '../../../types'

export class StarshipsEndpoint {
  public path = `${ENDPOINT.STARSHIPS}`
  constructor(protected readonly client: IHttpClient) {}

  /**
   * This method will return the resource schema
   */
  public getSchema(): ApiResponse<IResourceSchema> {
    return this.client.get<IResourceSchema>(`${this.path}/schema`)
  }

  /**
   * This method will return the starships resource
   * @param id
   */
  public read(id: string): ApiResponse<IStarship> {
    return this.client.get(`${this.path}/${id}`)
  }

  /**
   * This method will return the starships list
   * Searchable field fot this resource are the `name` and the `model`
   * @param parameters
   * example { search: 'Death Star' }
   * example { search: 'DS-1' }
   * This method can also be used to paginate the result
   * example { page: 1 }
   * They can be used together
   */
  public list(parameters?: Partial<IParameters>): ApiResponse<IStarship> {
    if (parameters) {
      return this.client.get<IStarship>(this.path, { ...parameters })
    }
    return this.client.get<IStarship>(this.path)
  }
}