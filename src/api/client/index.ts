import env from 'dotenv'
import { HOST } from '../../enums'
import { HttpClient } from './http'
import { FilmsEndpoint } from './endpoints/films'
import { PeopleEndpoint } from './endpoints/people'
import { PlanetsEndpoint } from './endpoints/planets'
import { SpeciesEndpoint } from './endpoints/species'

env.config()

export class ApiClient {
  protected client: HttpClient
  private static instance: ApiClient
  public film: FilmsEndpoint
  public people: PeopleEndpoint
  public planets: PlanetsEndpoint
  public species: SpeciesEndpoint

  protected constructor(public readonly host = HOST.API) {
    this.client = new HttpClient()
    this.film = new FilmsEndpoint(this.client)
    this.people = new PeopleEndpoint(this.client)
    this.planets = new PlanetsEndpoint(this.client)
    this.species = new SpeciesEndpoint(this.client)
  }

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient()
    }
    return ApiClient.instance
  }
}