# 🛍️ E-Commerce Web Application

## 📖 Project Overview

This project is a Full Stack MERN E-Commerce Web Application developed as a Capstone Project. It provides a complete online shopping platform where users can browse products, create an account, log in securely, add items to the cart, place orders, and manage their shopping experience. The application also includes an Admin Dashboard for managing products and customer orders.

---

## 🚀 Features

### 👤 User Features

- User Registration
- User Login
- Secure JWT Authentication
- Browse Products
- Product Details
- Men Collection
- Women Collection
- Sale Collection
- Search Products
- Shopping Cart
- Wishlist
- Checkout
- Place Orders
- My Orders
- Responsive Design

---

### 👨‍💼 Admin Features

- Admin Dashboard
- Add Products
- Edit Products
- Delete Products
- Manage Products
- View Customer Orders
- Update Order Status

---

## 🛠️ Technologies Used

### Frontend

- React.js
- React Router DOM
- Axios
- React Hot Toast
- Lucide React
- CSS3

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs
- dotenv
- CORS

---

## 📂 Project Structure


Ecommerce
│
├── Backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── Frontend
│   ├── src
│   ├── components
│   ├── context
│   ├── pages
│   ├── styles
│   ├── App.jsx
│   └── package.json
│
└── README.md


---

## ⚙️ Installation

### Clone Repository

bash
git clone https://github.com/your-github-username/your-repository-name.git


### Backend Setup

bash
cd Backend
npm install
npm start


### Frontend Setup

bash
cd Frontend
npm install
npm run dev


---

## 🔑 Environment Variables

Create a .env file inside the *Backend* folder.

env
PORT=5000
MONGO_URI=Your_MongoDB_Atlas_URI
JWT_SECRET=Your_JWT_Secret_Key


---

## 📡 API Endpoints

### Authentication

- POST /api/auth/register
- POST /api/auth/login

### Products

- GET /api/products
- GET /api/products/:id
- POST /api/products
- PUT /api/products/:id
- DELETE /api/products/:id

### Cart

- GET /api/cart
- POST /api/cart/add
- PUT /api/cart/update
- DELETE /api/cart/remove/:productId
- DELETE /api/cart/clear

### Orders

- POST /api/orders/place
- GET /api/orders/my-orders
- GET /api/orders/all-orders
- PUT /api/orders/update/:id

---

## 💾 Database Collections

- Users
- Products
- Cart
- Orders

---

## 🔒 Security Features

- JWT Authentication
- Password Encryption using bcryptjs
- Protected Routes
- Admin Authorization

---

## 📱 Application Pages

### User Pages

- Home
- Products
- Product Details
- Men
- Women
- Sale
- Cart
- Wishlist
- Checkout
- Login
- Register
- My Orders

### Admin Pages

- Admin Dashboard
- Add Product
- Manage Products
- Edit Product
- Manage Orders

---

## 🌟 Future Improvements

- Online Payment Gateway Integration
- Product Reviews & Ratings
- Coupon & Discount System
- Email Notifications
- Inventory Management
- Product Categories
- User Profile Management
- Order Tracking

---

## 👩‍💻 Developed By

*Ananya Kumari*

*BCA Student | MERN Stack Developer | Full Stack Web Developer*
