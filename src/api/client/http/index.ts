import { ApiResponse, HOST, IHttpClient } from '../../../types'
import Axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { ApiError } from '../errors'

export class HttpClient implements Partial<IHttpClient> {
  protected api: string = process.env.HOST_API || HOST.API

  public get<T>(endpoint: string, parameters?: unknown): ApiResponse<T> {
    return Axios.get(`${this.api}/${endpoint}`, {
      params: parameters || null,
      ...this.getRequestConfig(),
    })
      .then(({ data, ...request }) => ({ ...data, status: request.status }))
      .catch((error) => {
        return this.errorParser(error, endpoint)
      })
  }

  protected getRequestConfig(): AxiosRequestConfig {
    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    return config
  }

  protected errorParser(error: AxiosError, endpoint: string): Error {
    let message: string
    let statusCode: number | null = null
    if (!error.response || !error.response.data) {
      message = `Api client error - ${error.toString()}`
    } else {
      statusCode = error.response.status
      message = error.response.data.detail
    }
    throw ApiError.invalidResponse({ message, statusCode, endpoint })
  }
}
