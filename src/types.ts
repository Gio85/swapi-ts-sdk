export * from './enums'

export interface IHttpClient {
  get<T>(path: string, parameter?: any): ApiResponse<T>
}

export interface IApiMeta {
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface IApiResponse<T> {
  data: T[]
  meta: IApiMeta
  status: number
}

export type ApiResponse<T> = Promise<IApiResponse<T> & (T & { status: number })>

export interface IApiError {
  message: string
  endpoint: string
  statusCode?: number
}

export interface IPaginationParameters {
  page?: number
  limit?: number
}

export interface ICharacterParameters extends IPaginationParameters {
  name?: string
  gender?: string
  homeworldId?: number
  speciesId?: number
}

export interface IFilmParameters extends IPaginationParameters {
  title?: string
  director?: string
}

export interface IPlanetParameters extends IPaginationParameters {
  name?: string
  climate?: string
  terrain?: string
}

export interface ISpeciesParameters extends IPaginationParameters {
  name?: string
  classification?: string
}

export interface IStarshipParameters extends IPaginationParameters {
  name?: string
  starshipClass?: string
  manufacturer?: string
}

export interface IVehicleParameters extends IPaginationParameters {
  name?: string
  vehicleClass?: string
  manufacturer?: string
}

export type SearchType = 'characters' | 'films' | 'planets' | 'species' | 'starships' | 'vehicles'

export interface ISearchParameters {
  q: string
  type?: SearchType
}

export interface ISearchResult {
  type: SearchType
  data: ICharacter | IFilm | IPlanet | ISpecie | IStarship | IVehicle
}

export interface ISearchResponse {
  results: ISearchResult[]
  total: number
  query: string
  status: number
}

interface IResource {
  id: number
  createdAt: string
  updatedAt: string
}

export interface IFilm extends IResource {
  title: string
  episodeId: number
  openingCrawl: string
  director: string
  producer: string
  releaseDate: string
  characters?: ICharacter[]
  planets?: IPlanet[]
  species?: ISpecie[]
  starships?: IStarship[]
  vehicles?: IVehicle[]
}

export interface ICharacter extends IResource {
  name: string
  height: string
  mass: string
  hairColor: string
  skinColor: string
  eyeColor: string
  birthYear: string
  gender: string
  homeworldId: number | null
  homeworld?: IPlanet
  species?: ISpecie[]
  starships?: IStarship[]
  vehicles?: IVehicle[]
}

export interface IPlanet extends IResource {
  name: string
  rotationPeriod: string
  orbitalPeriod: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surfaceWater: string
  population: string
}

export interface ISpecie extends IResource {
  name: string
  classification: string
  designation: string
  averageHeight: string
  skinColors: string
  hairColors: string
  eyeColors: string
  averageLifespan: string
  language: string
  homeworldId: number | null
}

export interface IVehicle extends IResource {
  name: string
  model: string
  manufacturer: string
  costInCredits: string
  length: string
  maxAtmospheringSpeed: string
  crew: string
  passengers: string
  cargoCapacity: string
  consumables: string
  vehicleClass: string
}

export interface IStarship extends IVehicle {
  hyperdriveRating: string
  mglt: string
  starshipClass: string
}
