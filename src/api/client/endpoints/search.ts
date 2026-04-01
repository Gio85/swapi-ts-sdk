import { ENDPOINT } from '../../../enums'
import { IHttpClient, ISearchParameters, ISearchResponse } from '../../../types'

export class SearchEndpoint {
  public path = `${ENDPOINT.SEARCH}`
  constructor(protected readonly client: IHttpClient) {}

  public search(parameters: ISearchParameters): Promise<ISearchResponse> {
    return this.client.get<any>(this.path, { ...parameters }) as unknown as Promise<ISearchResponse>
  }
}
