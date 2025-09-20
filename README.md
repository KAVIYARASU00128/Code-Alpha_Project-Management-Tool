# Project Management Backend

This is the backend service for a project management tool, built with Node.js, Express, and MongoDB.

## Features

- User registration and authentication (JWT)
- Project creation, updates, and member assignment
- Task management with status and assignment
- Commenting system within tasks
- Real-time updates with WebSockets (Socket.IO)

## Setup Instructions

1. Clone the repository  
2. Install dependencies: `npm install`  
3. Create an `.env` file in the root folder with the following variables:  
4. Run the server:  
   - For development (auto-restart): `npm run dev`  
   - For production: `npm start`  
5. API will be available at `http://localhost:<PORT>`

## Folder Structure

- `config/` - Environment and DB configuration  
- `controllers/` - Request handlers  
- `models/` - Mongoose schemas  
- `routes/` - API route definitions  
- `middlewares/` - Auth and error handling middlewares  
- `sockets/` - WebSocket setup and event handlers  
- `utils/` - Utility functions  

## License

MIT
