import { IApiError } from '../../../types'

const ERROR_MESSAGE = {
  INVALID_INPUT: (message: string): string => `Invalid input provided - ${message} -`,
  INVALID_RESPONSE: (message: string): string => `Invalid API response - ${message} -`,
}

export class ApiError extends Error {
  public readonly message: string
  public readonly statusCode: number
  public readonly endpoint: string

  constructor(message: string, endpoint: string, statusCode?: number) {
    super(message)
    this.endpoint = endpoint
    this.statusCode = statusCode || null
    Object.setPrototypeOf(this, ApiError.prototype)
  }

  public static invalidInput(input: IApiError): ApiError {
    const { message, endpoint, statusCode } = input
    return new ApiError(ERROR_MESSAGE.INVALID_INPUT(message), endpoint, statusCode || null)
  }

  public static invalidResponse(input: IApiError): ApiError {
    const { message, endpoint, statusCode } = input
    return new ApiError(ERROR_MESSAGE.INVALID_RESPONSE(message), endpoint, statusCode || null)
  }
}
