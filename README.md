# 🛒 Full-Stack E-Commerce Web Application

A modern full-stack E-Commerce web application where users can browse products, view details, add items to cart, simulate payments, and place orders. Built using a complete MERN-style architecture with authentication and database integration.

---

## 🚀 Features

### 👤 Authentication

* User Registration & Login
* JWT-based Authentication
* Protected Routes

### 🛍️ Product Management

* Dynamic product fetching from backend
* Product detail page (sproduct)
* Image handling from server

### 🛒 Cart System

* Add to Cart functionality
* Quantity management
* Cart stored in localStorage
* Dynamic total price calculation

### 💳 Checkout & Payment

* Simulated payment system (for demo/project use)
* Order confirmation page
* Cart cleared after successful checkout

### 📦 Order Management

* Orders saved to MongoDB
* Backend API for order creation
* Order data includes items, quantity, and total amount

### 📧 Contact System

* Contact form with email integration using Nodemailer

### 🖼️ Media Handling

* Image upload using Multer
* Static file serving from backend

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript (Vanilla)

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Other Tools & Libraries

* JSON Web Token (JWT) – Authentication
* Multer – File Upload
* Nodemailer – Email Service
* REST APIs – Client-Server Communication

---

## 📂 Project Structure

```
webtech/
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── server.js
│
├── index.html
├── shop.html
├── sproduct.html
├── cart.html
├── login.html
├── signup.html
├── script.js
├── style.css
└── success.html
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone(https://github.com/tarun8795/E-Commerce-Web-Application-project1)
cd E-Commerce-Web-Application-project1
```

### 2️⃣ Install backend dependencies

```
cd server
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file inside `/server`:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

---

### 4️⃣ Run the server

```
node server.js
```

---

### 5️⃣ Open frontend

Open `index.html` in your browser

---

## 🔄 Application Flow

```
User → Browse Products → Add to Cart → Checkout → 
Simulated Payment → Order Saved in MongoDB → Success Page
```

---

## 🔐 Security Notes

* Environment variables are stored securely using `.env`
* JWT used for authentication
* Sensitive data is not exposed to frontend

---

## 📌 Future Enhancements

* Razorpay/Stripe real payment integration
* Order history page
* Admin dashboard
* Product filtering & search
* Responsive mobile design improvements

---

## 🧠 Learning Outcomes

* Full-stack development using Node.js & MongoDB
* REST API design and integration
* Authentication using JWT
* Cart and order management logic
* Real-world project architecture

---

## 📄 License

This project is for educational purposes.
