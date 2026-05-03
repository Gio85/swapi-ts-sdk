import { ENDPOINT } from '../../../enums'
import { IHttpClient, IStatusResponse } from '../../../types'

export class StatusEndpoint {
  public path = `${ENDPOINT.STATUS}`
  constructor(protected readonly client: IHttpClient) {}

  public get(): Promise<IStatusResponse> {
    return this.client.get<any>(this.path) as unknown as Promise<IStatusResponse>
  }
}