# Personal Website

Full-stack personal website application with React frontend and Node.js backend.

## Project Structure

personal-website/
├── client/ # React frontend
├── server/ # Node.js backend
└── package.json # Root package.json for development scripts

## Development

1. Install dependencies:

```bash
npm run install-all
```

2. Start development servers:

```bash
npm run dev
```

- Frontend runs on: http://localhost:3000
- Backend runs on: http://localhost:5000

## Environment Setup

1. Backend Configuration:

   - Copy `server/.env.example` to `server/.env`
   - Update the values in `.env` with your actual configuration
   - Copy `server/config/develop.example.json` to `server/config/develop.json`
   - Update the values in `develop.json` if not using environment variables

2. Frontend Configuration:
   - Copy `client/.env.example` to `client/.env`
   - Update the API URL and any other necessary values
