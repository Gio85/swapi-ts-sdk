import env from 'dotenv'
import { HOST } from '../../enums'
import { HttpClient } from './http'
import { FilmsEndpoint } from './endpoints/films'
import { PeopleEndpoint } from './endpoints/people'

env.config()

export class ApiClient {
  protected client: HttpClient
  private static instance: ApiClient
  public film: FilmsEndpoint
  public people: PeopleEndpoint

  protected constructor(public readonly host = HOST.API) {
    this.client = new HttpClient()
    this.film = new FilmsEndpoint(this.client)
    this.people = new PeopleEndpoint(this.client)
  }

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient()
    }
    return ApiClient.instance
  }
}