import { ENDPOINT } from '../../../enums'
import { ApiResponse, IHttpClient, IParameters, IResourceSchema, IVehicle } from '../../../types'

export class VehiclesEndpoint {
  public path = `${ENDPOINT.VEHICLES}`
  constructor(protected readonly client: IHttpClient) {}

  /**
   * This method will return the resource schema
   */
  public getSchema(): ApiResponse<IResourceSchema> {
    return this.client.get<IResourceSchema>(`${this.path}/schema`)
  }

  /**
   * This method will return the vehicles resource
   * @param id
   */
  public read(id: string): ApiResponse<IVehicle> {
    return this.client.get(`${this.path}/${id}`)
  }

  /**
   * This method will return the vehicles list
   * Searchable field fot this resource are the `name` and the model
   * @param parameters
   * example { search: 'Sand Crawler' }
   * example { search: 'Digger Crawler' }
   * This method can also be used to paginate the result
   * example { page: 1 }
   * They can be used together
   */
  public list(parameters?: Partial<IParameters>): ApiResponse<IVehicle> {
    if (parameters) {
      return this.client.get<IVehicle>(this.path, { ...parameters })
    }
    return this.client.get<IVehicle>(this.path)
  }

}