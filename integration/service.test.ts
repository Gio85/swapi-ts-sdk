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
})
