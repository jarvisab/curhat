
# Curhat - Mini Project

Welcome to **Curhat**, a cozy corner in the web where you can share your thoughts and read others' musings. It's simple, it's random, you got the idea.

## Live Demo : [curhat.links.here](https://curhat.links.here)

## Table of Contents

- [Introduction](#introduction)

- [Features](#features)

- [Tech Stack](#tech-stack)

- [Getting Started](#getting-started)

- [Notes](#notes)

  

### Introduction

**Curhat** is an Indonesian term for sharing or venting out. This mini project serves as a platform to read and post messages randomly. It's a simple and straightforward project.

  

### Features

-  **Read Random Posts**: Dive into a pool of thoughts shared by others.

-  **Post Your "Message"**: Share your own thoughts. Titles and creators are optional, but remember, it's public!

  

### Tech Stack

-  **Frontend**: Next.js with TypeScript, styled with Tailwind CSS and Shadcn UI components.

-  **Backend**: SQLite database managed by [Turso](https://turso.tech/) and [Drizzle ORM](https://orm.drizzle.team/).

-  **Editor**: [Tiptap](https://tiptap.dev/product/editor) for the text editor.

  

### Getting Started

To set up the project locally:

  

1. Clone the repository and install dependencies.

2. Configure your env (using `.env.local` by default, change it in `drizzle.config.ts`) file (refer to `.env.example` for structure) with your Turso connection URL and auth token. For more details, visit [Turso Documentation](https://docs.turso.tech/sdk/ts/quickstart).

3. Initialize the database with `npx drizzle-kit push`.

4. Start the development server with `npm run dev` or build with `npm run build`.


 
### Notes

*  **Database**: Ensure the database is pre-populated with some data (It's doing this by default), as the app **(currently)** doesn't handle an empty database state.
