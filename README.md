# Mission 5 Phase 2 — T5 ( Kayde, Michelle)

A fullstack web application with a **React (Vite)** frontend and **Node.js / Express** backend, connected to **MongoDB**, and fully containerised with Docker.

---

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and **running**
- Node.js (for local development without Docker)
- MongoDB installed locally (for local development without Docker)

---

## Getting Started with Docker

### 1. Make sure Docker Desktop is running

Open Docker Desktop from the Start menu and wait for the whale icon in the system tray to stop animating and show **"Engine running"**.

### 2. Build and start all containers

From the project root, run:

```bash
docker compose up --build
```

This starts three containers: `frontend`, `backend`, and `seeder`.

### 3. Seed the database

In a separate terminal, run:

```bash
docker compose run --rm seeder
```

This inserts the Z Energy card data into MongoDB.

### 4. Open in browser

- **Frontend** → http://localhost
- **Backend API** → http://localhost:5000

### 5. Stop all containers

```bash
docker compose down
```

---

## Database Seeding (CLI Commands)

The project includes a CLI tool (`Z-CLI`) for managing seed data. All commands are run via Docker using the `seeder` service.

### Seed the database
Inserts the card data into MongoDB:
```bash
docker compose run --rm seeder
```

### List seeded data
Prints all documents currently in the database:
```bash
docker compose run --rm seeder node homepage-backend/seed/index.js list
```

### Delete all data
Deletes all documents (prompts for confirmation):
```bash
docker compose run --rm -it seeder node homepage-backend/seed/index.js delete-all
```
> The `-it` flag is required here to enable the interactive yes/no prompt.

---

## Environment Variables

The backend connects to MongoDB using the `MONGO_URI` environment variable set in `docker-compose.yml`:

```yaml
backend:
  environment:
    - MONGO_URI=mongodb://host.docker.internal:27017/yourdb
    - PORT=5000
    - NODE_ENV=production
```

`host.docker.internal` allows the Docker container to reach MongoDB running on your local machine. Replace `yourdb` with your actual database name.

---

## Local Development (without Docker)

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

**Backend:**
```bash
cd backend
npm install
npm run start
```

**Seed locally:**
```bash
cd backend
Z-Cli seed
```

---


## Team

| Name     |
|----------|
| Kayde    |
| Michelle |
| Ammon    |
| Neha     |
