import { ENDPOINT, FORMAT } from '../../../enums'
import { ApiResponse, IHttpClient, IParameters, IResourceSchema, ISpecie } from '../../../types'

export class SpeciesEndpoint {
  public path = `${ENDPOINT.SPECIES}`
  constructor(protected readonly client: IHttpClient) {}

  /**
   * This method will return the resource schema
   */
  public getSchema(): ApiResponse<IResourceSchema> {
    return this.client.get<IResourceSchema>(`${this.path}/schema`)
  }

  /**
   * This method will return the species resource
   * @param id
   */
  public read(id: string): ApiResponse<ISpecie> {
    return this.client.get(`${this.path}/${id}`)
  }

  /**
   * This method will return the species list
   * Searchable field fot this resource is the `name`
   * @param parameters
   * example { search: 'Wookie' }
   * This method can also be used to paginate the result
   * example { page: 1 }
   * They can be used together
   */
  public list(parameters?: Partial<IParameters>): ApiResponse<ISpecie> {
    if (parameters) {
      return this.client.get<ISpecie>(this.path, { ...parameters })
    }
    return this.client.get<ISpecie>(this.path)
  }

  /**
   * This method will return the wookie format of the resource
   */
  public getWookiee(id: string): ApiResponse<ISpecie> {
    return this.client.get(`${this.path}/${id}`, { format: FORMAT.WOOKIEE })
  }
}