# 🎵 Spiral Sounds

An online classic vinyl record store built with Node.js, Express, and SQLite. Browse and purchase vintage vinyl records with a modern e-commerce experience.

![Spiral Sounds](public/images/spiral_logo.png)

## 📝 Description

Spiral Sounds is a full-stack web application that allows users to browse a curated collection of classic vinyl records, filter by genre, search for specific albums, and manage their shopping cart. The application features user authentication, session management, and a complete e-commerce workflow.

## ✨ Features

- **Product Catalog**: Browse a collection of classic vinyl records
- **Search & Filter**: Search by title, artist, or genre; filter by music genre
- **User Authentication**: Secure signup and login with password hashing (bcrypt)
- **Session Management**: Express sessions for maintaining user state
- **Shopping Cart**: Add items to cart, view cart, and manage quantities
- **Responsive Design**: Modern, mobile-friendly UI
- **SQLite Database**: Lightweight, embedded database for product and user data

## 🛠️ Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **SQLite3** - Database
- **express-session** - Session middleware
- **bcryptjs** - Password hashing
- **validator** - Input validation

### Frontend
- **Vanilla JavaScript** - No frameworks, pure JS
- **HTML5 & CSS3** - Semantic markup and modern styling
- **Fetch API** - RESTful API communication

## 📁 Project Structure

```
Spiral Sounds/
├── controllers/           # Route controllers
│   ├── authController.js  # Authentication logic
│   ├── cartController.js  # Shopping cart logic
│   ├── meController.js    # User profile logic
│   └── productsController.js # Products logic
├── routes/                # API route definitions
│   ├── auth.js           # Authentication routes
│   ├── cart.js           # Cart routes
│   ├── me.js             # User routes
│   └── products.js       # Products routes
├── middleware/            # Custom middleware
│   └── requireAuth.js    # Authentication middleware
├── db/                    # Database connection
│   └── db.js             # Database utilities
├── public/                # Static frontend files
│   ├── index.html        # Homepage
│   ├── login.html        # Login page
│   ├── signup.html       # Signup page
│   ├── cart.html         # Shopping cart page
│   ├── css/              # Stylesheets
│   ├── js/               # Frontend JavaScript
│   └── images/           # Product images and assets
├── server.js              # Main server file
├── createTable.js         # Database schema creation
├── seedTable.js           # Database seeding script
├── logTable.js            # Database logging utility
├── data.js                # Sample product data
├── database.db            # SQLite database file
└── package.json           # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Spiral Sounds"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   
   Create the products table:
   ```bash
   node createTable.js
   ```

   Seed the database with sample data:
   ```bash
   node seedTable.js
   ```

4. **Set environment variable (optional)**
   ```bash
   # Windows
   set SPIRAL_SESSION_SECRET=your-secret-key

   # Linux/Mac
   export SPIRAL_SESSION_SECRET=your-secret-key
   ```

5. **Start the server**
   ```bash
   npm start
   ```

6. **Open your browser**
   ```
   http://localhost:8000
   ```

## 🔌 API Endpoints

### Products
- `GET /api/products` - Get all products (supports ?genre= and ?search= query params)
- `GET /api/products/genres` - Get all available genres

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user info

### Shopping Cart
- `GET /api/cart` - Get user's cart items
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:itemId` - Update cart item quantity
- `DELETE /api/cart/:itemId` - Remove item from cart

## 💾 Database Schema

### Products Table
```sql
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  artist TEXT NOT NULL,
  price REAL NOT NULL,
  image TEXT NOT NULL,
  year INTEGER,
  genre TEXT,
  stock INTEGER
)
```

### Users Table
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
)
```

### Cart Items Table
```sql
CREATE TABLE cart_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
)
```

## 🎨 Sample Products

The store includes a curated collection of 10 classic vinyl records across various genres:
- Rock
- Indie
- Ambient
- Folk
- Punk

Each record includes:
- Album title
- Artist name
- Price ($37-$47 range)
- Release year (2003-2020)
- Genre classification
- Stock quantity
- Cover art image

## 🔐 Security Features

- **Password Hashing**: Uses bcryptjs to securely hash passwords
- **Session Management**: Secure session cookies with httpOnly flag
- **Input Validation**: Validates user input using validator.js
- **Authentication Middleware**: Protects routes requiring authentication

## 📜 Available Scripts

- `npm start` - Start the production server
- `node createTable.js` - Create database tables
- `node seedTable.js` - Seed database with sample data
- `node logTable.js` - View database contents

## 🌟 Features in Detail

### User Authentication
- Secure signup with email validation
- Password hashing with bcrypt (10 salt rounds)
- Session-based authentication
- Protected routes with auth middleware

### Product Management
- Dynamic product filtering by genre
- Full-text search across title, artist, and genre
- Product details with pricing and stock information
- High-quality product images

### Shopping Cart
- Add/remove items from cart
- Update item quantities
- Persistent cart (stored in database)
- Real-time cart updates

## 👨‍💻 Author

**Tom Chant**

## 📄 License

ISC License

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

For support, please open an issue in the repository.

---

**Enjoy browsing and collecting classic vinyl records with Spiral Sounds! 🎵📀**

