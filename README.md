# 🛒 E-Commerce Web Application

A full-stack E-Commerce Web Application where users can browse products, register, login, add items to cart, and place orders.

---

## 🚀 Features

* 👤 User Registration & Login (JWT Authentication)
* 🛍️ Browse Products
* 🛒 Add to Cart
* 📦 Place Orders
* 📧 Contact Form (Email Integration)
* 🔐 Secure Authentication with JSON Web Tokens
* 🖼️ Image Upload Support

---

## 🛠️ Tech Stack

### Frontend:

* HTML
* CSS
* JavaScript

### Backend:

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose

### Other Tools:

* JWT (Authentication)
* Nodemailer (Email)
* Multer (File Upload)

---

## 📂 Project Structure

```
webtech/
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   ├── package.json
│
├── img/
├── index.html
├── login.html
├── signup.html
├── shop.html
├── cart.html
├── style.css
└── script.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/your-repo-name.git
```

### 2️⃣ Go to project folder

```
cd webtech/server
```

### 3️⃣ Install dependencies

```
npm install
```

### 4️⃣ Create `.env` file

Add the following:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
JWT_EXPIRES=1d
EMAIL_USER=your_email
EMAIL_PASS=your_app_password
```

### 5️⃣ Run the server

```
node server.js
```

---

## 🌐 Usage

* Open frontend files (`index.html`) in browser
* Backend runs on:

```
http://localhost:5000
```

---

## 🔐 Environment Variables

Make sure to keep your `.env` file secure and never upload it to GitHub.

---

## 📸 Screenshots

(Add your project screenshots here for better presentation)

---

## 🚀 Future Improvements

* 💳 Payment Gateway Integration
* 📱 Responsive Design Enhancements
* 🛠️ Admin Dashboard
* ⭐ Product Reviews & Ratings

---

## 👨‍💻 Author

* **Tarun**
* GitHub: https://github.com/your-username

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
