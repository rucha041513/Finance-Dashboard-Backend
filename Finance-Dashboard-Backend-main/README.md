# Finance Dashboard Backend

## Features
- JWT Authentication
- Role-based access control
- Financial records CRUD
- Dashboard analytics

## Setup
npm install
npx prisma migrate dev
npm run dev

## API
POST /api/users/register
POST /api/users/login
GET /api/records
POST /api/records
GET /api/dashboard/summary