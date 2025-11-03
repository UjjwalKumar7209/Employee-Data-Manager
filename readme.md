## Employee Data Manager

A small full-stack application to create, read, update and delete (CRUD) employee/student records. Built with a Node.js + Express backend, MongoDB for storage, and a React (Vite) frontend.

### Features

- Create new employee records (name, age, phone)
- View all records
- Edit existing records
- Delete records
- Simple REST API suitable for learning or as a small starter project

## Tech stack

- Backend: Node.js, Express, Mongoose
- Database: MongoDB (local or Atlas)
- Frontend: React + Vite, Tailwind CSS (project includes Tailwind config)
- Dev tools: nodemon (dev), Vite (frontend dev server)

## Prerequisites

- Node.js (16+ recommended) and npm
- MongoDB running locally (or a MongoDB Atlas connection string)

## Quick start

Open two terminals — one for the backend and one for the frontend.

Backend

1. Install dependencies and start the server:

```powershell
cd backend
npm install
# Start with node
npm start

# Or during development use nodemon (installed as a dependency):
npx nodemon server.js
```

The backend listens on port 3000 by default and connects to a MongoDB database at mongodb://localhost:27017/students (see `backend/server.js`). If you want to use MongoDB Atlas, replace the connection string in `server.js` with your Atlas URI.

Frontend

1. Install dependencies and run the dev server:

```powershell
cd frontend
npm install
npm run dev
```

Vite will serve the frontend (by default on http://localhost:5173). The frontend expects the backend API at http://localhost:3000 — change the URLs in the frontend code if you run the backend on a different host or port.

## API

The backend exposes a small REST API. Base URL (default): http://localhost:3000

- GET / — Get all records

	Example:

	```bash
	curl http://localhost:3000
	```

- POST / — Create a new record

	Request body (JSON): { "name": "Alice", "age": 30, "phone": "1234567890" }

	Example:

	```bash
	curl -X POST http://localhost:3000 -H "Content-Type: application/json" -d '{"name":"Alice","age":30,"phone":"1234567890"}'
	```

- PUT /:id — Update a record by id

	Request body (JSON): { "name": "Bob", "age": 28, "phone": "0987654321" }

	Example:

	```bash
	curl -X PUT http://localhost:3000/<record-id> -H "Content-Type: application/json" -d '{"name":"Bob","age":28,"phone":"0987654321"}'
	```

- DELETE /delete/:id — Delete a record by id

	Example:

	```bash
	curl -X DELETE http://localhost:3000/delete/<record-id>
	```

Notes

- The server uses a local MongoDB connection string in `backend/server.js` by default:

```js
await mongoose.connect("mongodb://localhost:27017/students")
```

Replace it with your MongoDB Atlas connection string if you prefer cloud DB.

## Project structure (important files)

- `backend/`
	- `server.js` — Express server and route handlers (CRUD)
	- `models/Data.js` — Mongoose schema/model for records
	- `package.json` — backend dependencies and start script

- `frontend/`
	- `src/` — React source (components: `Inputdata.jsx`, `Alldata.jsx`, `Editdata.jsx`, `Deletedata.jsx`, `Navbar.jsx`)
	- `vite.config.js`, `tailwind.config.js`, `postcss.config.js`
	- `package.json` — frontend scripts (dev/build)

- `images/`, `public/` — static assets

## Development notes & tips

- If you change the backend port or host, update any frontend fetch requests that target the API.
- Ensure MongoDB is running before starting the backend. On Windows you can run MongoDB as a service or use the MongoDB Desktop/Compass tools to manage your DB.

## Contributing

Contributions are welcome. Suggested small improvements:

- Add validation and improved error handling on the backend
- Add unit/integration tests
- Add authentication if using this beyond learning

To contribute:

1. Fork the repo
2. Create a feature branch
3. Open a pull request with a clear description of changes

## License

This project is provided under the MIT License — feel free to reuse and adapt.

## Contact

If you have questions or want to collaborate, open an issue or reach out to the repository owner.

---
_README generated/expanded to include usage, API docs, and project structure._