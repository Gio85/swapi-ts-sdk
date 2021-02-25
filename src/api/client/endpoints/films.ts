import { ENDPOINT } from '../../../enums'
import { ApiResponse, IFilm, IHttpClient, IResourceSchema, ISearch } from '../../../types'

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
   * This method will return the film list if the parameters will not pass
   * Otherwise it will try to fetch the resource based on the parameters
   * @param parameters
   * example { search: 'Return of the Jedi' }
   */
  public list(parameters?: ISearch): ApiResponse<IFilm> {
    if (parameters) {
      return this.client.get<IFilm>(this.path, { ...parameters })
    }
    return this.client.get<IFilm>(this.path)
  }

}
