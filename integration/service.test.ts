import { ApiClient } from '../src/api/client'

describe('SDK', () => {
  let client: ApiClient
  beforeAll(() => {
    client = ApiClient.getInstance()
  })

  describe('Client', () => {
    it('should have the instance', () => {
      expect(typeof client).toBe('object')
    })
  })

  describe('Films', () => {
    it('should fail reading a film', async () => {
      await client.film.read('2000').catch((e) => {
        expect(e.endpoint).toBe('films/2000')
        expect(e.message).toContain('Not found')
        expect(e.statusCode).toBe(404)
      })
    })

    it('should fetch a list of films', async () => {
      const films = await client.film.list()
      expect(films.status).toBe(200)
      expect(films.results.length).toBeGreaterThan(0)
    })

    it('should find a film based on the search', async () => {
      const title = 'Return of the Jedi'
      const film = await client.film.list({ search: title })
      expect(film.status).toBe(200)
      expect(film.count).toBe(1)
      expect(film.results[0].title).toBe(title)
    })

    it('should read a film', async () => {
      const film = await client.film.read('1')
      expect(film.status).toBe(200)
      expect(film).toHaveProperty('title')
    })

    it('should get the film schema', async () => {
      const schema = await client.film.getSchema()
      expect(schema.status).toBe(200)
      expect(typeof schema.description).toBe('string')
      expect(typeof schema.title).toBe('string')
      expect(schema.required.length).toBeGreaterThan(1)
    })
  })

  describe('People', () => {
    it('should fail reading a person', async () => {
      await client.people.read('2000').catch((e) => {
        expect(e.endpoint).toBe('people/2000')
        expect(e.message).toContain('Not found')
        expect(e.statusCode).toBe(404)
      })
    })
    it('should fetch a list of people', async () => {
      const people = await client.people.list()
      expect(people.status).toBe(200)
      expect(people.results.length).toBeGreaterThan(0)
    })

    it('should fetch a list of people passing the page', async () => {
      const people = await client.people.list({ page: 3 })
      expect(people.status).toBe(200)
      expect(people.results.length).toBeGreaterThan(0)
    })

    it('should find a person based on the search', async () => {
      const name = 'Luke'
      const people = await client.people.list({ search: name })
      expect(people.status).toBe(200)
      expect(people.count).toBe(1)
      expect(people.results[0].name).toContain(name)
    })

    it('should read a person', async () => {
      const singlePerson = await client.people.read('1')
      expect(singlePerson.status).toBe(200)
      expect(singlePerson).toHaveProperty('name')
    })

    it('should get the people schema', async () => {
      const schema = await client.people.getSchema()
      expect(schema.status).toBe(200)
      expect(typeof schema.description).toBe('string')
      expect(typeof schema.title).toBe('string')
      expect(schema.required.length).toBeGreaterThan(1)
    })

    it('should get wookiee', async () => {
      const wookiee = await client.people.getWookiee('1')
      expect(wookiee.status).toBe(200)
    })
  })

  describe('Planets', () => {
    it('should fail reading a planet', async () => {
      await client.planets.read('2000').catch((e) => {
        expect(e.endpoint).toBe('planets/2000')
        expect(e.message).toContain('Not found')
        expect(e.statusCode).toBe(404)
      })
    })

    it('should fetch a list of planets', async () => {
      const planets = await client.planets.list()
      expect(planets.status).toBe(200)
      expect(planets.results.length).toBeGreaterThan(0)
    })

    it('should fetch a list of planets passing the page', async () => {
      const planets = await client.planets.list({ page: 3 })
      expect(planets.status).toBe(200)
      expect(planets.results.length).toBeGreaterThan(0)
    })

    it('should find a planet based on the search', async () => {
      const name = 'Tatooine'
      const planet = await client.planets.list({ search: name })
      expect(planet.status).toBe(200)
      expect(planet.count).toBe(1)
      expect(planet.results[0].name).toContain(name)
    })

    it('should read a planet', async () => {
      const planet = await client.planets.read('1')
      expect(planet.status).toBe(200)
      expect(planet).toHaveProperty('name')
    })

    it('should get the planet schema', async () => {
      const schema = await client.planets.getSchema()
      expect(schema.status).toBe(200)
      expect(typeof schema.description).toBe('string')
      expect(typeof schema.title).toBe('string')
      expect(schema.required.length).toBeGreaterThan(1)
    })

    it('should get wookiee', async () => {
      const wookiee = await client.planets.getWookiee('1')
      expect(wookiee.status).toBe(200)
    })
  })

  describe('Species', () => {
    it('should fail reading a species', async () => {
      await client.species.read('2000').catch((e) => {
        expect(e.endpoint).toBe('species/2000')
        expect(e.message).toContain('Not found')
        expect(e.statusCode).toBe(404)
      })
    })

    it('should fetch a list of species', async () => {
      const species = await client.species.list()
      expect(species.status).toBe(200)
      expect(species.results.length).toBeGreaterThan(0)
    })

    it('should fetch a list of species passing the page', async () => {
      const species = await client.species.list({ page: 3 })
      expect(species.status).toBe(200)
      expect(species.results.length).toBeGreaterThan(0)
    })

    it('should find a specie based on the search', async () => {
      const name = 'Wookie'
      const specie = await client.species.list({ search: name })
      expect(specie.status).toBe(200)
      expect(specie.count).toBe(1)
      expect(specie.results[0].name).toContain(name)
    })

    it('should read a specie', async () => {
      const specie = await client.species.read('1')
      expect(specie.status).toBe(200)
      expect(specie).toHaveProperty('name')
    })


    it('should get the specie schema', async () => {
      const schema = await client.species.getSchema()
      expect(schema.status).toBe(200)
      expect(typeof schema.description).toBe('string')
      expect(typeof schema.title).toBe('string')
      expect(schema.required.length).toBeGreaterThan(1)
    })

    it('should get wookiee', async () => {
      const wookiee = await client.species.getWookiee('1')
      expect(wookiee.status).toBe(200)
    })
  })

  describe('Starships', () => {
    it('should fail reading a starship', async () => {
      await client.starships.read('2000').catch((e) => {
        expect(e.endpoint).toBe('starships/2000')
        expect(e.message).toContain('Not found')
        expect(e.statusCode).toBe(404)
      })
    })

    it('should fetch a list of starships', async () => {
      const starships = await client.starships.list()
      expect(starships.status).toBe(200)
      expect(starships.results.length).toBeGreaterThan(0)
    })

    it('should fetch a list of starships passing the page', async () => {
      const starships = await client.starships.list({ page: 3 })
      expect(starships.status).toBe(200)
      expect(starships.results.length).toBeGreaterThan(0)
    })

    it('should find a starship based on the name', async () => {
      const name = 'Death Star'
      const starship = await client.starships.list({ search: name })
      expect(starship.status).toBe(200)
      expect(starship.count).toBe(1)
      expect(starship.results[0].name).toContain(name)
    })

    it('should find a starship based on the model', async () => {
      const model = 'DS-1'
      const starship = await client.starships.list({ search: model })
      expect(starship.status).toBe(200)
      expect(starship.count).toBe(1)
      expect(starship.results[0].model).toContain(model)
    })

    it('should read a starship', async () => {
      const starship = await client.starships.read('2')
      expect(starship.status).toBe(200)
      expect(starship).toHaveProperty('name')
    })

    it('should get the starship schema', async () => {
      const schema = await client.starships.getSchema()
      expect(schema.status).toBe(200)
      expect(typeof schema.description).toBe('string')
      expect(typeof schema.title).toBe('string')
      expect(schema.required.length).toBeGreaterThan(1)
    })
  })

  describe('Vehicles', () => {
    it('should fail reading a vehicle', async () => {
      await client.vehicles.read('2000').catch((e) => {
        expect(e.endpoint).toBe('vehicles/2000')
        expect(e.message).toContain('Not found')
        expect(e.statusCode).toBe(404)
      })
    })

    it('should fetch a list of vehicles', async () => {
      const vehicles = await client.vehicles.list()
      expect(vehicles.status).toBe(200)
      expect(vehicles.results.length).toBeGreaterThan(0)
    })

    it('should fetch a list of vehicles passing the page', async () => {
      const vehicles = await client.vehicles.list({ page: 3 })
      expect(vehicles.status).toBe(200)
      expect(vehicles.results.length).toBeGreaterThan(0)
    })

    it('should find a vehicle based on the name', async () => {
      const name = 'Sand Crawler'
      const vehicle = await client.vehicles.list({ search: name })
      expect(vehicle.status).toBe(200)
      expect(vehicle.count).toBe(1)
      expect(vehicle.results[0].name).toContain(name)
    })

    it('should find a vehicle based on the model', async () => {
      const model = 'Digger Crawler'
      const vehicle = await client.vehicles.list({ search: model })
      expect(vehicle.status).toBe(200)
      expect(vehicle.count).toBe(1)
      expect(vehicle.results[0].model).toContain(model)
    })

    it('should read a vehicle', async () => {
      const vehicle = await client.vehicles.read('6')
      expect(vehicle.status).toBe(200)
      expect(vehicle).toHaveProperty('name')
    })

    it('should get the vehicle schema', async () => {
      const schema = await client.vehicles.getSchema()
      expect(schema.status).toBe(200)
      expect(typeof schema.description).toBe('string')
      expect(typeof schema.title).toBe('string')
      expect(schema.required.length).toBeGreaterThan(1)
    })

  })
})
