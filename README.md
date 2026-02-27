# QuickHire — Full-Stack Job Portal

A modern job portal built with **Next.js 16** (frontend) and **Express + Prisma** (backend), connected to **PostgreSQL**.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Setup & Installation](#4-setup--installation)
5. [Environment Variables](#5-environment-variables)
6. [Running the Project](#6-running-the-project)
7. [Database (Prisma)](#7-database-prisma)
8. [Server — File Reference](#8-server--file-reference)
9. [Client — File Reference](#9-client--file-reference)
10. [API Documentation](#10-api-documentation)

---

## 1. Project Overview

QuickHire lets employers post jobs and candidates browse/apply for them. The project is split into two separate apps inside the `Qtec/` monorepo:

| Folder    | Role                    | Port |
| --------- | ----------------------- | ---- |
| `server/` | REST API (Node/Express) | 5000 |
| `client/` | Next.js frontend        | 3000 |

---

## 2. Tech Stack

### Backend (`server/`)

| Technology           | Version | Purpose                    |
| -------------------- | ------- | -------------------------- |
| Node.js + Express    | 5.x     | HTTP server & REST API     |
| TypeScript           | 5.x     | Type safety                |
| Prisma ORM           | 7.x     | Database access layer      |
| `@prisma/adapter-pg` | 7.x     | PostgreSQL driver adapter  |
| PostgreSQL           | any     | Relational database        |
| dotenv               | 17.x    | Load `.env` variables      |
| cors                 | 2.x     | Cross-origin requests      |
| nodemon + ts-node    | —       | Dev server with hot reload |

### Frontend (`client/`)

| Technology   | Version | Purpose                           |
| ------------ | ------- | --------------------------------- |
| Next.js      | 16      | React framework (App Router, SSR) |
| React        | 19      | UI library                        |
| TypeScript   | 5.x     | Type safety                       |
| Tailwind CSS | 4.x     | Utility-first styling             |
| Radix UI     | 1.x     | Accessible UI primitives          |
| shadcn/ui    | 3.x     | Pre-built component system        |
| lucide-react | 0.5x    | Icon library                      |

---

## 3. Project Structure

```
Qtec/
├── client/                        # Next.js frontend
│   ├── public/                    # Static assets (images, icons)
│   └── src/
│       ├── app/                   # Next.js App Router pages
│       │   ├── layout.tsx         # Root layout (fonts, global styles)
│       │   ├── page.tsx           # Home page (/)
│       │   ├── globals.css        # Global CSS
│       │   ├── jobs/
│       │   │   ├── page.tsx       # Job listing page (/jobs)
│       │   │   └── [id]/
│       │   │       └── page.tsx   # Job detail page (/jobs/:id)
│       │   └── admin/
│       │       └── page.tsx       # Admin panel (/admin)
│       ├── components/            # Reusable UI components
│       │   ├── Navbar.tsx
│       │   ├── Hero.tsx
│       │   ├── CategorySection.tsx
│       │   ├── CategoryCard.tsx
│       │   ├── FeaturedJobs.tsx
│       │   ├── LatestJobs.tsx
│       │   ├── LatestJobCard.tsx
│       │   ├── JobCard.tsx
│       │   ├── ApplyForm.tsx
│       │   ├── CTASection.tsx
│       │   ├── Footer.tsx
│       │   ├── SVGs.tsx
│       │   └── ui/               # shadcn/ui components
│       ├── lib/                   # Utility functions & API calls
│       ├── types/
│       │   └── index.ts           # Shared TypeScript interfaces
│       └── ...
│
└── server/                        # Express backend
    ├── prisma/
    │   ├── schema.prisma          # DB models (Job, Application)
    │   └── migrations/            # Auto-generated SQL migrations
    ├── prisma.config.ts           # Prisma v7 config (DB URL, paths)
    ├── src/
    │   ├── index.ts               # Server entry point
    │   ├── config/
    │   │   └── db.ts              # PrismaClient initialization
    │   └── modules/
    │       ├── jobs/
    │       │   ├── job.routes.ts
    │       │   ├── job.controller.ts
    │       │   └── job.service.ts
    │       └── applications/
    │           ├── application.routes.ts
    │           ├── application.controller.ts
    │           └── application.service.ts
    ├── .env                       # Secret config (never commit)
    ├── .env.example               # Template for env variables
    └── tsconfig.json
```

---

## 4. Setup & Installation

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [PostgreSQL](https://www.postgresql.org/) running locally (or a hosted DB)
- `npm` (comes with Node)

### Step 1 — Clone the repository

```bash
git clone <your-repo-url>
cd Qtec
```

### Step 2 — Install server dependencies

```bash
cd server
npm install
```

### Step 3 — Install client dependencies

```bash
cd ../client
npm install
```

### Step 4 — Configure environment variables

Copy the example file and fill in your values:

```bash
cd ../server
copy .env.example .env
```

Then edit `server/.env` (see [Section 5](#5-environment-variables)).

### Step 5 — Run database migrations

```bash
cd server
npx prisma migrate dev --name init
```

### Step 6 — Generate Prisma client

```bash
npx prisma generate
```

---

## 5. Environment Variables

### `server/.env`

```env
# Server port (default: 5000)
PORT=5000

# PostgreSQL credentials (used individually by pg pool)
DB_USER=postgres
DB_PASS=yourpassword
DB_HOST=localhost
DB_PORT=5432
DB_NAME=Job

# Full connection string — used by Prisma (via prisma.config.ts)
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/Job?schema=public
```

> ⚠️ **Never commit `.env` to Git.** It contains database credentials.

### `client/.env.local`

```env
# Backend API URL (adjust for production)
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## 6. Running the Project

### Start the backend (dev mode with hot reload)

```bash
cd server
npm run dev
```

Server starts at: **http://localhost:5000**

### Start the frontend (dev mode)

```bash
cd client
npm run dev
```

Frontend starts at: **http://localhost:3000**

### Build for production

```bash
# Backend
cd server && npm run build && npm start

# Frontend
cd client && npm run build && npm start
```

---

## 7. Database (Prisma)

### Schema — `server/prisma/schema.prisma`

#### `Job` model

| Field          | Type     | Notes                     |
| -------------- | -------- | ------------------------- |
| `id`           | String   | CUID primary key          |
| `title`        | String   | Job title                 |
| `company`      | String   | Employer name             |
| `location`     | String   | City / remote             |
| `category`     | String   | e.g. Technology, Finance  |
| `description`  | String   | Full job description      |
| `jobType`      | String   | Default: `"Full Time"`    |
| `salary`       | String?  | Optional salary range     |
| `companyLogo`  | String?  | Optional logo URL         |
| `createdAt`    | DateTime | Auto-set on creation      |
| `applications` | Relation | One-to-many → Application |

#### `Application` model

| Field        | Type     | Notes                            |
| ------------ | -------- | -------------------------------- |
| `id`         | String   | CUID primary key                 |
| `jobId`      | String   | Foreign key → Job                |
| `name`       | String   | Applicant's full name            |
| `email`      | String   | Applicant's email                |
| `resumeLink` | String   | Must be a valid `http(s)://` URL |
| `coverNote`  | String?  | Optional cover letter note       |
| `createdAt`  | DateTime | Auto-set on creation             |

### Useful Prisma Commands

```bash
# Apply migrations (development)
npx prisma migrate dev --name <description>

# Open Prisma Studio (GUI for your database)
npx prisma studio

# Reset database
npx prisma migrate reset

# Regenerate client after schema changes
npx prisma generate
```

---

## 8. Server — File Reference

### `src/index.ts` — Entry Point

Sets up the Express app, middleware, and registers all route modules.

| Item             | Detail                                                                       |
| ---------------- | ---------------------------------------------------------------------------- |
| `cors`           | Allows requests from `http://localhost:3000` (configurable via `CLIENT_URL`) |
| `express.json()` | Parses incoming JSON request bodies                                          |
| `GET /health`    | Health check endpoint, returns `{ status: "ok" }`                            |
| Route mount      | `/api/jobs` → `job.routes.ts`                                                |
| Route mount      | `/api/applications` → `application.routes.ts`                                |

---

### `src/config/db.ts` — Prisma Client

Initializes the singleton `PrismaClient` using the `pg` connection pool and the `@prisma/adapter-pg` adapter (required by Prisma v7).

```ts
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
```

Exports `prisma` — imported by all service files.

---

### `prisma.config.ts` — Prisma v7 Config

Required by Prisma v7. Defines the schema path, migrations folder, and database connection URL.

```ts
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations" },
  datasource: { url: process.env.DATABASE_URL },
});
```

> **Note:** In Prisma v7, the `url` is configured here, NOT in `schema.prisma`.

---

### `modules/jobs/`

#### `job.routes.ts` — Route Definitions

Maps HTTP methods and paths to controller functions.

| Method | Path            | Controller                 | Description                |
| ------ | --------------- | -------------------------- | -------------------------- |
| GET    | `/api/jobs`     | `jobController.getAll`     | List all jobs (filterable) |
| GET    | `/api/jobs/:id` | `jobController.getById`    | Get single job             |
| POST   | `/api/jobs`     | `jobController.create`     | Create a new job           |
| DELETE | `/api/jobs/:id` | `jobController.deleteById` | Delete a job               |

#### `job.controller.ts` — Request Handlers

Handles HTTP layer: reads request params/body, calls service, sends JSON response.

| Function               | Description                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `getAll(req, res)`     | Reads `?q`, `?category`, `?location` query params, passes to `jobService.findAll()` |
| `getById(req, res)`    | Reads `:id` param, returns 404 if not found                                         |
| `create(req, res)`     | Validates required fields, calls `jobService.create()`, returns 201                 |
| `deleteById(req, res)` | Deletes job by ID, returns success message                                          |

#### `job.service.ts` — Business Logic

Contains all database queries via Prisma. No HTTP logic here.

| Function           | Description                                                                                                                                                    |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `findAll(filters)` | Filters by keyword (`q` searches title/company/description), `category` (exact), `location` (partial). Orders by newest first. Includes `_count.applications`. |
| `findById(id)`     | Returns job + all related applications                                                                                                                         |
| `create(data)`     | Inserts a new `Job` row                                                                                                                                        |
| `deleteById(id)`   | Deletes job row (cascades to its applications)                                                                                                                 |

---

### `modules/applications/`

#### `application.routes.ts`

| Method | Path                | Controller                     |
| ------ | ------------------- | ------------------------------ |
| POST   | `/api/applications` | `applicationController.create` |
| GET    | `/api/applications` | `applicationController.getAll` |

#### `application.controller.ts`

| Function           | Description                                                                                                     |
| ------------------ | --------------------------------------------------------------------------------------------------------------- |
| `create(req, res)` | Validates `jobId`, `name`, `email`, `resumeLink`. Delegates to service. Returns 201 or 400 on validation error. |
| `getAll(req, res)` | Returns all applications (for admin panel)                                                                      |

#### `application.service.ts`

| Function             | Description                                                                                                                          |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `create(data)`       | Validates email format with regex. Validates resume URL starts with `http://` or `https://`. Checks job exists. Inserts application. |
| `findAll()`          | Returns all applications newest-first, includes job title & company name                                                             |
| `findByJobId(jobId)` | Returns all applications for a specific job                                                                                          |

---

## 9. Client — File Reference

### Pages (`src/app/`)

| File                 | Route       | Description                                                                                                     |
| -------------------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| `page.tsx`           | `/`         | Home page — assembles `Navbar`, `Hero`, `CategorySection`, `CTASection`, `FeaturedJobs`, `LatestJobs`, `Footer` |
| `jobs/page.tsx`      | `/jobs`     | Job listing with sidebar category filter and keyword/location search. Uses React `Suspense` for data fetching.  |
| `jobs/[id]/page.tsx` | `/jobs/:id` | Individual job detail page with the `ApplyForm` component                                                       |
| `admin/page.tsx`     | `/admin`    | Admin panel — create new jobs, view all applications                                                            |

### Components (`src/components/`)

| Component             | Description                                           |
| --------------------- | ----------------------------------------------------- |
| `Navbar.tsx`          | Top navigation bar with mobile hamburger menu         |
| `Hero.tsx`            | Landing hero section with search bar and popular tags |
| `CategorySection.tsx` | Grid of job category cards                            |
| `CategoryCard.tsx`    | Single category card with icon and label              |
| `FeaturedJobs.tsx`    | Highlighted featured job listings fetched from API    |
| `LatestJobs.tsx`      | Latest job listings fetched from API                  |
| `LatestJobCard.tsx`   | Individual card for latest jobs display               |
| `JobCard.tsx`         | Reusable job card component                           |
| `ApplyForm.tsx`       | Application form — submits `POST /api/applications`   |
| `CTASection.tsx`      | Call-to-action section with image and button          |
| `Footer.tsx`          | Site footer with links                                |
| `SVGs.tsx`            | All inline SVG assets (hero backgrounds, icons, etc.) |
| `ui/`                 | shadcn/ui primitive components (Button, Input, etc.)  |

### `src/types/index.ts` — Shared Types

| Interface        | Fields                                                                                                                        |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `Job`            | `id`, `title`, `company`, `location`, `category`, `description`, `jobType`, `salary?`, `companyLogo?`, `createdAt`, `_count?` |
| `Application`    | `id`, `jobId`, `name`, `email`, `resumeLink`, `coverNote?`, `createdAt`, `job?`                                               |
| `ApiResponse<T>` | `success`, `data`, `message?`                                                                                                 |
| `JobFilters`     | `q?`, `category?`, `location?`                                                                                                |

---

## 10. API Documentation

**Base URL:** `http://localhost:5000`

All responses follow this shape:

```json
{ "success": true | false, "data": ..., "message": "..." }
```

---

### `GET /health`

Health check.

**Response:**

```json
{ "status": "ok" }
```

---

### Jobs

#### `GET /api/jobs`

List all jobs. Supports optional query filters.

**Query Parameters:**

| Param      | Type   | Description                                              |
| ---------- | ------ | -------------------------------------------------------- |
| `q`        | string | Search in title, company, description (case-insensitive) |
| `category` | string | Filter by exact category (case-insensitive)              |
| `location` | string | Filter by partial location match                         |

**Example:**

```
GET /api/jobs?q=developer&category=Technology&location=Dhaka
```

**Response `200`:**

```json
{
  "success": true,
  "data": [
    {
      "id": "clxxxxx",
      "title": "Frontend Developer",
      "company": "TechCorp",
      "location": "Dhaka",
      "category": "Technology",
      "description": "...",
      "jobType": "Full Time",
      "salary": "$2000/month",
      "companyLogo": null,
      "createdAt": "2026-02-28T00:00:00.000Z",
      "_count": { "applications": 5 }
    }
  ]
}
```

---

#### `GET /api/jobs/:id`

Get a single job by ID, including all its applications.

**Response `200`:**

```json
{
  "success": true,
  "data": {
    "id": "clxxxxx",
    "title": "Frontend Developer",
    "applications": [ ... ]
  }
}
```

**Response `404`:**

```json
{ "success": false, "message": "Job not found" }
```

---

#### `POST /api/jobs`

Create a new job. _(Admin use)_

**Request Body:**

```json
{
  "title": "Backend Engineer",
  "company": "FinTech BD",
  "location": "Remote",
  "category": "Engineering",
  "description": "We are looking for...",
  "jobType": "Full Time",
  "salary": "$3000/month",
  "companyLogo": "https://example.com/logo.png"
}
```

| Field         | Required | Description               |
| ------------- | -------- | ------------------------- |
| `title`       | ✅       | Job title                 |
| `company`     | ✅       | Company name              |
| `location`    | ✅       | Job location              |
| `category`    | ✅       | Job category              |
| `description` | ✅       | Full description          |
| `jobType`     | ❌       | Defaults to `"Full Time"` |
| `salary`      | ❌       | Salary range string       |
| `companyLogo` | ❌       | Logo image URL            |

**Response `201`:**

```json
{ "success": true, "data": { "id": "clxxxxx", ... } }
```

**Response `400`:**

```json
{
  "success": false,
  "message": "title, company, location, category, description are required"
}
```

---

#### `DELETE /api/jobs/:id`

Delete a job and all its associated applications (cascade). _(Admin use)_

**Response `200`:**

```json
{ "success": true, "message": "Job deleted successfully" }
```

---

### Applications

#### `POST /api/applications`

Submit a job application.

**Request Body:**

```json
{
  "jobId": "clxxxxx",
  "name": "Tasnimur Rahman",
  "email": "tasnim@example.com",
  "resumeLink": "https://drive.google.com/my-resume",
  "coverNote": "I am a passionate developer..."
}
```

| Field        | Required | Validation                              |
| ------------ | -------- | --------------------------------------- |
| `jobId`      | ✅       | Must reference an existing Job          |
| `name`       | ✅       | Applicant full name                     |
| `email`      | ✅       | Must be a valid email format            |
| `resumeLink` | ✅       | Must start with `http://` or `https://` |
| `coverNote`  | ❌       | Optional cover letter                   |

**Response `201`:**

```json
{
  "success": true,
  "data": {
    "id": "clyyyyy",
    "jobId": "clxxxxx",
    "name": "Tasnimur Rahman",
    "email": "tasnim@example.com",
    "resumeLink": "https://drive.google.com/my-resume",
    "coverNote": "...",
    "createdAt": "2026-02-28T00:00:00.000Z",
    "job": { "title": "Frontend Developer", "company": "TechCorp" }
  }
}
```

**Response `400` (validation errors):**

```json
{ "success": false, "message": "Invalid email address" }
{ "success": false, "message": "Resume link must be a valid URL starting with http:// or https://" }
{ "success": false, "message": "Job not found" }
```

---

#### `GET /api/applications`

List all applications. _(Admin use)_

**Response `200`:**

```json
{
  "success": true,
  "data": [
    {
      "id": "clyyyyy",
      "name": "Tasnimur Rahman",
      "email": "tasnim@example.com",
      "resumeLink": "https://...",
      "createdAt": "...",
      "job": { "title": "Frontend Developer", "company": "TechCorp" }
    }
  ]
}
```

---

## License

MIT
