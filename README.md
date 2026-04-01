```
███████╗████████╗ █████╗ ██████╗     ██╗    ██╗ █████╗ ██████╗ ███████╗     █████╗ ██████╗ ██╗
██╔════╝╚══██╔══╝██╔══██╗██╔══██╗    ██║    ██║██╔══██╗██╔══██╗██╔════╝    ██╔══██╗██╔══██╗██║
███████╗   ██║   ███████║██████╔╝    ██║ █╗ ██║███████║██████╔╝███████╗    ███████║██████╔╝██║
╚════██║   ██║   ██╔══██║██╔══██╗    ██║███╗██║██╔══██║██╔══██╗╚════██║    ██╔══██║██╔═══╝ ██║
███████║   ██║   ██║  ██║██║  ██║    ╚███╔███╔╝██║  ██║██║  ██║███████║    ██║  ██║██║     ██║
╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝╚═╝     ╚═╝
                                   ███████╗██████╗ ██╗  ██╗
                                   ██╔════╝██╔══██╗██║ ██╔╝
                                   ███████╗██║  ██║█████╔╝ 
                                   ╚════██║██║  ██║██╔═██╗ 
                                   ███████║██████╔╝██║  ██╗
                                   ╚══════╝╚═════╝ ╚═╝  ╚═╝
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
```

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
[![licence](https://img.shields.io/badge/licence-MIT-success?style=for-the-badge)](https://choosealicense.com/)

A TypeScript SDK for the [Star Wars API](https://github.com/Gio85/star-wars-api) — fully typed, with support for pagination, filtering, and cross-resource search.

📦 **npm**: https://www.npmjs.com/package/swapi-ts-sdk  
🚀 **API**: https://starwarsapi.up.railway.app  
📖 **API Docs**: https://starwarsapi.up.railway.app/api/docs

---

## ✨ Features

- 🎬 **Films** — Episodes I–IX, Rogue One & Solo
- 👤 **Characters** — from Luke Skywalker to Grogu
- 🪐 **Planets** — Tatooine to Exegol
- 🧬 **Species** — Human to Ewok to Dathomirian
- 🚀 **Starships** — Millennium Falcon to the Supremacy
- 🚗 **Vehicles** — AT-AT to Podracer
- 🔍 **Cross-resource search** — query across all resources at once
- 📄 **Pagination & filtering** on every endpoint
- 🔷 **Fully typed** — complete TypeScript interfaces for all resources

---

## 📦 Installation

```bash
npm install swapi-ts-sdk
```

---

## 🚀 Quick Start

```typescript
import { ApiClient } from 'swapi-ts-sdk'

const client = ApiClient.getInstance()

// List characters
const characters = await client.characters.list()

// Get a single film
const film = await client.films.read(4)

// Search across all resources
const results = await client.search.search({ q: 'Skywalker' })
```

---

## 💡 Usage Examples

### Pagination

```typescript
// Page 1, 10 results (default)
const page1 = await client.characters.list()

// Page 2, 20 results per page
const page2 = await client.characters.list({ page: 2, limit: 20 })

// First 5 films
const films = await client.films.list({ page: 1, limit: 5 })
```

### Filtering

```typescript
// Search characters by name
const luke = await client.characters.list({ name: 'Luke' })

// Filter by gender and paginate
const chars = await client.characters.list({ gender: 'female', page: 1, limit: 10 })

// Filter planets by climate
const deserts = await client.planets.list({ climate: 'arid' })

// Filter starships by class and manufacturer
const destroyers = await client.starships.list({ starshipClass: 'Star Destroyer' })

// Filter films by director
const lucasFilms = await client.films.list({ director: 'George Lucas' })
```

### Single Resource

```typescript
// Get a character by ID (with relations)
const character = await client.characters.read(1)

// Get a film with full cast & relations
const film = await client.films.read(4)

// Get a planet
const planet = await client.planets.read(1)
```

### Cross-resource Search

```typescript
// Search across all resources
const all = await client.search.search({ q: 'Skywalker' })

// Search within a specific resource type
const ships = await client.search.search({ q: 'Falcon', type: 'starships' })
```

### Response Format

List endpoints return:

```json
{
  "data": [...],
  "meta": {
    "total": 101,
    "page": 1,
    "limit": 10,
    "totalPages": 11
  }
}
```

---

## 🌐 Available Endpoints

| Property | Methods | Description |
|----------|---------|-------------|
| `client.characters` | `list(params?)`, `read(id)` | Star Wars characters |
| `client.films` | `list(params?)`, `read(id)` | Star Wars films |
| `client.planets` | `list(params?)`, `read(id)` | Planets |
| `client.species` | `list(params?)`, `read(id)` | Species |
| `client.starships` | `list(params?)`, `read(id)` | Starships |
| `client.vehicles` | `list(params?)`, `read(id)` | Vehicles |
| `client.search` | `search({ q, type? })` | Cross-resource search |

### Query Parameters

All `list()` methods support:

| Param | Type | Description |
|-------|------|-------------|
| `page` | number | Page number (default: 1) |
| `limit` | number | Results per page (default: 10, max: 100) |

Additional filters per endpoint:

| Endpoint | Filter Params |
|----------|---------------|
| `characters` | `name`, `gender`, `homeworldId`, `speciesId` |
| `films` | `title`, `director` |
| `planets` | `name`, `climate`, `terrain` |
| `species` | `name`, `classification` |
| `starships` | `name`, `starshipClass`, `manufacturer` |
| `vehicles` | `name`, `vehicleClass`, `manufacturer` |
| `search` | `q` (required), `type` (optional) |

---

## ⚙️ Configuration

By default the SDK points to the live API. To use a local or custom instance, set the `HOST_API` environment variable:

```env
HOST_API=http://localhost:3000
```

Or pass the host directly when constructing the client:

```typescript
const client = new ApiClient('http://localhost:3000')
```

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|------------|
| Language | TypeScript |
| HTTP Client | Fetch API (native) |
| Package Manager | npm |
| Backed by | [Star Wars API](https://github.com/Gio85/star-wars-api) |

---

## 📜 License

MIT

