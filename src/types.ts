export * from './enums'

export interface IHttpClient {
  get<T>(path: string, parameter?: any): ApiResponse<T>
}

export type ApiResponse<T> = Promise<IApiResponse<T> & (T & { status: number })>

export interface IApiResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
  status: number
}

export interface IParameters {
  search: string | number
  page: number
}

export type TWookie = Record<string, any>

interface IResource {
  edited: string
  created: string
  url: string
}

export interface IFilm extends IResource {
  starships: string[]
  planets: string[]
  producer: string
  title: string
  release_date: string
  vehicles: string[]
  episode_id: number
  director: string
  opening_crawl: string
  characters: string[]
  species: string[]
}

export interface IPeople extends IResource {
  starships: string[]
  name: string
  gender: string
  vehicles: string[]
  skin_color: string
  hair_color: string
  height: string
  eye_color: string
  mass: string
  films: string[]
  species: string[]
  homeworld: string
  birth_year: string
}

export interface IPlanet extends IResource {
  diameter: string
  climate: string
  surface_water: string
  name: string
  rotation_period: string
  terrain: string
  gravity: string
  orbital_period: string
  films: string[]
  residents: string[]
  population: string
}

export interface ISpecie extends IResource {
  name: string
  classification: string
  people: string[]
  eye_colors: string
  designation: string
  skin_colors: string
  language: string
  hair_colors: string
  homeworld: string
  films: string[]
  average_lifespan: string
  average_height: string
}

export interface IVehicle extends IResource {
  vehicle_class: string
  passengers: string
  pilots: string[]
  name: string
  cargo_capacity: string
  consumables: string
  max_atmosphering_speed: string
  crew: string
  length: string
  films: string[]
  model: string
  cost_in_credits: string
  manufacturer: string
}

export interface IStarship extends IVehicle {
  hyperdrive_rating: string
  MGLT: string
  starship_class: string
}

export interface IResourceSchema {
  description: string
  title: string
  required: string[]
  $schema: string
  type: string
  properties: Record<string, Record<string, string>>
}
