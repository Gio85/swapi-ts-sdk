import { ApiResponse, HOST, IHttpClient } from '../../../types'
import Axios, { AxiosRequestConfig } from 'axios'

export class HttpClient implements Partial<IHttpClient> {
  protected api: string = process.env.HOST_API || HOST.API

  public get<T>(endpoint: string, parameters?: unknown): ApiResponse<T> {
    return Axios.get(`${this.api}/${endpoint}`, {
      params: parameters || null,
      ...this.getRequestConfig(),
    })
      .then(({ data, ...request }) => ({ ...data, status: request.status }))
      .catch(error => console.log(error))
  }

  protected getRequestConfig(): AxiosRequestConfig {
    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    return config
  }
}
