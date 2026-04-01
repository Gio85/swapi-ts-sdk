import { ENDPOINT } from '../../../enums'
import { ApiResponse, IFilm, IFilmParameters, IHttpClient } from '../../../types'

export class FilmsEndpoint {
  public path = `${ENDPOINT.FILMS}`
  constructor(protected readonly client: IHttpClient) {}

  public read(id: number): ApiResponse<IFilm> {
    return this.client.get(`${this.path}/${id}`)
  }

  public list(parameters?: IFilmParameters): ApiResponse<IFilm> {
    if (parameters) {
      return this.client.get<IFilm>(this.path, { ...parameters })
    }
    return this.client.get<IFilm>(this.path)
  }
}
