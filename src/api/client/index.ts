import env from 'dotenv'
import { HOST } from '../../enums'
import { HttpClient } from './http'
import { FilmsEndpoint } from './endpoints/films'
import { PeopleEndpoint } from './endpoints/people'
import { PlanetsEndpoint } from './endpoints/planets'
import { SpeciesEndpoint } from './endpoints/species'
import { StarshipsEndpoint } from './endpoints/starships'
import { VehiclesEndpoint } from './endpoints/vehicles'

env.config()

export class ApiClient {
  protected client: HttpClient
  private static instance: ApiClient
  public films: FilmsEndpoint
  public people: PeopleEndpoint
  public planets: PlanetsEndpoint
  public species: SpeciesEndpoint
  public starships: StarshipsEndpoint
  public vehicles: VehiclesEndpoint

  protected constructor(public readonly host = process.env.HOST_API || process.env.REACT_APP_HOST_API || HOST.API) {
    this.client = new HttpClient()
    this.films = new FilmsEndpoint(this.client)
    this.people = new PeopleEndpoint(this.client)
    this.planets = new PlanetsEndpoint(this.client)
    this.species = new SpeciesEndpoint(this.client)
    this.starships = new StarshipsEndpoint(this.client)
    this.vehicles = new VehiclesEndpoint(this.client)
  }

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient()
    }
    return ApiClient.instance
  }
}