<div align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png" alt="shopVerse Logo" width="80" />
  <h1>shopVerse - Full-Stack MERN E-Commerce App</h1>
  <p>A professionally engineered, full-stack E-commerce platform built strictly using modern standard React (CRA) on the frontend and Express/MongoDB on the backend.</p>
</div>

---

## 🛠 Tech Stack Details

- **Frontend:** Pure React.js (`react-scripts`), Redux Toolkit (for Cart state management), AuthContext API (for JWT user sessions).
- **Backend:** Node.js, Express.js architecture mapped with middleware-based routing.
- **Database:** MongoDB (via Mongoose schemas).
- **Features:** Unified Admin Dashboard, Direct Cloudinary Content Maps, Personal User Profiles matching mapped Order Histories.
- **Payments:** Razorpay fully implemented (utilize your test metrics or placeholder).
- **Cloud Storage:** Cloudinary integration for Product image uploading securely via Multer.

---

## 🚀 Quick Start / Local Development Guide

The workspace is configured beautifully using a monorepo-friendly setup with `concurrently`, enabling you to start everything from the very root folder.

### 1️⃣ Dependencies & Environments
Make sure you have MongoDB running locally, or map it to a remote database string.

Inside the `backend/` folder, ensure your `.env` looks like this:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/shopVerse
JWT_SECRET=super_secret_key
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

From the **root folder** `shopVerse/`, trigger a full install across environments:
```bash
npm run build
```

### 2️⃣ Populate the Database (Seeding)
Test the platform rapidly featuring beautiful dummy products (Unsplash) and automatic `Admin` role provisioning:
```bash
npm run seed
```
> **Seed Admin Access:** Email: `admin@shopVerse.com` | Password: `password123`

### 3️⃣ Run Servers Start
Run this single command at the root to bind the Backend (Port 5000) and Frontend (Port 3000) natively:
```bash
npm run dev
```

---

## ☁️ Deployment: Vercel + Render

Deploy the frontend and backend as separate services. Push the repository to **GitHub** first.

### Backend on Render

1. In [Render Dashboard](https://dashboard.render.com), create a **Web Service** from the repository.
2. Set **Root Directory** to `backend`.
3. Set **Build Command** to `npm install` and **Start Command** to `npm start`.
4. Add these environment variables in Render:
   `NODE_ENV=production`, `MONGO_URI`, `MONGO_DB_NAME` (optional), `JWT_SECRET`, `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`, `GMAIL_USER`, `GMAIL_PASS`, and `FRONTEND_URL`.
5. Set `FRONTEND_URL` to the final Vercel URL, for example `https://your-store.vercel.app`.
6. Deploy and copy the Render service URL, for example `https://your-backend.onrender.com`.

Render provides `PORT` automatically. Do not hard-code it.

### Frontend on Vercel

1. In [Vercel](https://vercel.com), import the same GitHub repository.
2. Set **Root Directory** to `frontend`.
3. Use `npm run build` as the build command and `build` as the output directory.
4. Add the environment variable `REACT_APP_API_URL` with the Render URL, for example `https://your-backend.onrender.com`.
5. Deploy. The included `frontend/vercel.json` keeps React Router URLs working when users refresh a page.

If you use a custom Vercel domain, update Render's `FRONTEND_URL` to that exact origin and redeploy the backend.

---

## 📄 Postman Documentations
This repository includes a fully-scaffolded API testing toolkit: **`shopVerse_Postman_Collection.json`**. 
Simply Import this file directly into the local Postman IDE. It features variables like `{{token}}` properly mapped to effortlessly check protected admin/user/order payloads. Happy coding!
