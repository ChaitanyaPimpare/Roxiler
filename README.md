# 🚀 RateMyStore – Full Stack Rating Platform

A full-stack web application that allows users to rate stores, view ratings, and manage store data with role-based access control.

---

## 📌 Features

### 🔐 Authentication & Authorization

* JWT-based login system
* Role-based access control (Admin, User, Store Owner)

### 👨‍💼 Admin

* Add new users (Admin / User / Store Owner)
* Add new stores
* View all users and stores
* Dashboard with:

  * Total users
  * Total stores
  * Total ratings

### 👤 Normal User

* Signup & login
* View all stores
* Search stores by name/address
* Submit rating (1–5)
* Update rating
* View own rating + average rating

### 🏪 Store Owner

* View users who rated their store
* View average store rating

---

## 🛠️ Tech Stack

### Backend

* NestJS
* PostgreSQL
* Prisma ORM
* JWT Authentication

### Frontend

* React (Vite)
* Tailwind CSS
* Axios

---

## 🏗️ Project Structure

### Backend (`rating-system-backend`)

```
src/
 ├── auth/
 ├── admin/
 ├── users/
 ├── stores/
 ├── ratings/
 ├── prisma/
 └── app.module.ts
```

### Frontend (`rating-frontend`)

```
src/
 ├── pages/
 ├── components/
 ├── services/
 └── App.jsx
```

---

## ⚙️ Installation & Setup

### 🔹 Backend Setup

```bash
cd rating-system-backend
npm install
```

#### Setup Environment

Create `.env` file:

```env
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/rating_db"
```

#### Run Prisma

```bash
npx prisma migrate dev
npx prisma generate
```

#### Start Server

```bash
npm run start:dev
```

---

### 🔹 Frontend Setup

```bash
cd rating-frontend
npm install
npm run dev
```

---

## 🔑 API Endpoints

### Auth

* `POST /auth/signup`
* `POST /auth/login`

### Admin

* `POST /admin/add-user`
* `POST /admin/add-store`
* `GET /admin/dashboard`
* `GET /admin/users`
* `GET /admin/stores`

### Ratings

* `POST /ratings`
* `GET /ratings/avg/:storeId`

### Stores

* `GET /stores`
* `GET /stores/search?q=`

---

## 📊 Database Design

* **User**
* **Store**
* **Rating**

Relations:

* One User → Many Ratings
* One Store → Many Ratings
* One User → One Rating per Store

---

## 🎯 Key Highlights

* Secure JWT authentication
* Role-based access control (RBAC)
* Optimized database schema using Prisma
* Clean modular backend architecture (NestJS)
* Responsive UI with Tailwind CSS
* Real-time rating updates

---

## 🚀 Future Improvements

* ⭐ Star-based UI instead of buttons
* 📊 Charts for admin dashboard
* 🔔 Notifications
* 🌙 Dark mode
* 🌐 Deployment (Vercel + Render)

---

## 👨‍💻 Author

**Chaitanya**

---

## 📌 Resume Description

Built a full-stack store rating platform using NestJS, PostgreSQL, Prisma, and React with role-based authentication and dynamic rating system enabling users to rate stores and admins to manage data efficiently.
