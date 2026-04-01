import { ENDPOINT } from '../../../enums'
import { ApiResponse, IHttpClient, IVehicle, IVehicleParameters } from '../../../types'

export class VehiclesEndpoint {
  public path = `${ENDPOINT.VEHICLES}`
  constructor(protected readonly client: IHttpClient) {}

  public read(id: number): ApiResponse<IVehicle> {
    return this.client.get(`${this.path}/${id}`)
  }

  public list(parameters?: IVehicleParameters): ApiResponse<IVehicle> {
    if (parameters) {
      return this.client.get<IVehicle>(this.path, { ...parameters })
    }
    return this.client.get<IVehicle>(this.path)
  }
}
