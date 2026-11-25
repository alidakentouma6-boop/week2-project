\# Week 6: Events API with PostgreSQL



MIS 457 · Web Based Application Programming · Fall 2026



\*\*Author:\*\* ALIDA KENTOUMA AKAGOU



An Express API for events, stored in PostgreSQL and accessed with Prisma.



\## ER diagram



```mermaid

erDiagram

&#x20;   User |o--o{ Event : organizes

&#x20;   User {

&#x20;       int id PK

&#x20;       string name

&#x20;       string email UK

&#x20;   }

&#x20;   Event {

&#x20;       int id PK

&#x20;       string title

&#x20;       datetime date

&#x20;       int organizerId FK

&#x20;   }

```



One user can organize many events. An event has zero or one organizer.



\## Routes



| Method | Path | What it does | Success |

|--------|------|--------------|---------|

| GET | /api/events | List all events, sorted by date | 200 |

| GET | /api/events/:id | Get one event | 200, or 404 |

| POST | /api/events | Create an event (title and date required) | 201, or 400 |

| PUT | /api/events/:id | Update title and/or date | 200, or 404 |

| DELETE | /api/events/:id | Delete an event | 204, or 404 |



\## How to run it



1\. Install PostgreSQL and remember the password and port.

2\. In this folder, run `npm install`.

3\. Create a `.env` file with one line (use your own password and port):

&#x20;  `DATABASE\_URL="postgresql://postgres:dev@127.0.0.1:5432/events"`

4\. Create the tables: `npx prisma migrate dev --name init`

5\. Add sample data (run once): `node prisma/seed.js`

6\. Start the server: `node --watch server.js`

7\. Open http://localhost:3000/api/events



The `.env` file is not in the repo because it contains the database password.

