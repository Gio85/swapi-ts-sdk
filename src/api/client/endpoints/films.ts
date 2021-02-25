import { ENDPOINT } from '../../../enums'
import { ApiResponse, IFilm, IHttpClient, IResourceSchema, IParameters } from '../../../types'

export class FilmsEndpoint {
  public path: string = `${ENDPOINT.FILMS}`
  constructor(protected readonly client: IHttpClient) {}

  /**
   * This method will return the resource schema
   */
  public getSchema(): ApiResponse<IResourceSchema> {
    return this.client.get<IResourceSchema>(`${this.path}/schema`)
  }
  /**
   * This method will return the film resource
   * @param id
   */
  public read(id: string): ApiResponse<IFilm> {
    return this.client.get(`${this.path}/${id}`)
  }

  /**
   * This method will return the film list
   * Searchable field fot this resource is the `title`
   * @param parameters
   * example { search: 'Return of the Jedi' }
   * This method can also be used to paginate the result
   * example { page: 1 }
   * They can be used together
   */
  public list(parameters?: Partial<IParameters>): ApiResponse<IFilm> {
    if (parameters) {
      return this.client.get<IFilm>(this.path, { ...parameters })
    }
    return this.client.get<IFilm>(this.path)
  }

}
