# Dynamic Blog Engine

A lightweight backend-focused blog application built with **Next.js**, **Prisma ORM**, and **SQLite**. The project allows users to create blog posts with automatically generated slugs and view them through dynamic routes.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Prisma ORM
- SQLite
- Tailwind CSS

## Features

- Create blog posts
- Automatic slug generation
- Unique slug validation
- Dynamic blog pages
- REST API using Route Handlers
- Prisma ORM integration
- Responsive UI

## Project Structure

```
app/
 ├── api/
 │   └── posts/
 │       ├── route.ts
 │       └── [slug]/route.ts
 ├── blog/
 │   ├── create/
 │   └── [slug]/
components/
prisma/
 ├── schema.prisma
 └── dev.db
```

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/blog-engine.git
```

Move into the project folder:

```bash
cd blog-engine
```

Install dependencies:

```bash
npm install
```

## Environment Setup

Create a `.env` file.

```
DATABASE_URL="file:./dev.db"
```

## Prisma Setup

Generate Prisma Client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev --name init
```

(Optional) Open Prisma Studio:

```bash
npx prisma studio
```

## Run Development Server

```bash
npm run dev
```

Application will be available at:

```
http://localhost:3000
```

## API Endpoints

### Create Post

```
POST /api/posts
```

Request Body

```json
{
  "title": "My First Blog",
  "image": "https://example.com/image.jpg",
  "description": "Blog content..."
}
```

### Get Post by Slug

```
GET /api/posts/:slug
```

Example

```
GET /api/posts/my-first-blog
```

## Slug Generation

The application automatically generates URL-friendly slugs.

Example:

```
My First Blog!
```

becomes

```
my-first-blog
```

## Frontend Pages

### Create Blog

```
/blog/create
```

### Read Blog

```
/blog/[slug]
```

## Available Commands

Install packages

```bash
npm install
```

Start development

```bash
npm run dev
```

Build project

```bash
npm run build
```

Run production

```bash
npm start
```

Generate Prisma Client

```bash
npx prisma generate
```

Run Migration

```bash
npx prisma migrate dev --name init
```

Open Prisma Studio

```bash
npx prisma studio
```

## Assumptions

- SQLite is used as the local database.
- Image field stores an image URL.
- Slugs are automatically generated from titles.
- Slugs are unique.
- Tailwind CSS is used for styling.
- Next.js App Router is used.

## Author

**Nirmal Fayake**
