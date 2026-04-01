import { ApiResponse, HOST, IHttpClient } from '../../../types'
import { ApiError } from '../errors'

export class HttpClient implements Partial<IHttpClient> {
  protected api: string = process.env.HOST_API || HOST.API

  public get<T>(endpoint: string, parameters?: unknown): ApiResponse<T> {
    const url = new URL(`${this.api}/${endpoint}`)
    if (parameters) {
      Object.entries(parameters as Record<string, unknown>).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value))
        }
      })
    }

    return fetch(url.toString(), {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(async (response) => {
        const data = await response.json()
        if (!response.ok) {
          throw ApiError.invalidResponse({
            message: data.message || response.statusText,
            statusCode: response.status,
            endpoint,
          })
        }
        return { ...data, status: response.status }
      })
      .catch((error) => {
        if (error instanceof ApiError) throw error
        throw ApiError.invalidResponse({ message: error.toString(), endpoint })
      })
  }
}
