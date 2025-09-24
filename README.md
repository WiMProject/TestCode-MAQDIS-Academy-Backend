# TestCode MAQDIS Academy

Backend skill test project untuk MAQDIS Academy yang mencakup berbagai implementasi fundamental programming.

## Deskripsi Project
Repository ini berisi kumpulan tugas backend development yang mendemonstrasikan kemampuan dalam:
- String manipulation dan concatenation
- Conditional logic dan game development
- Looping dan algoritma
- REST API development dengan Express.js

## Struktur Project

### Tugas 2 - String Concatenation
Implementasi penggabungan 4 variabel string menjadi satu kalimat.
- **File:** `type.js` (Node.js), `type.php` (PHP/Lumen)
- **Output:** "MAQDIS Academy is awesome"
- **Teknologi:** JavaScript, PHP

### Tugas 3 - Conditional Logic & Werewolf Game
Game Werewolf interaktif dengan validasi input dan conditional logic.
- **File:** `conditional.js`
- **Features:** Input validation, error handling, interactive game
- **Teknologi:** Node.js, readline, class-based OOP

### Tugas 4 - Looping Implementation
Implementasi looping maju dan mundur dengan bilangan genap.
- **File:** `looping.js`
- **Features:** For loop (maju), While loop (mundur)
- **Output:** Sequence 2-20 dan 20-2
- **Teknologi:** JavaScript loops

### Tugas 5 - API Sederhana
REST API dengan Express.js menggunakan arsitektur MVC dan best practices.
- **File:** `app.js` (main), `controllers/`, `routes/`, `middleware/`
- **Endpoints:** GET /hello, POST /data, DELETE /data, GET /setoran, GET /status
- **Features:** MVC pattern, error handling, logging, CORS, automated testing
- **Teknologi:** Express.js, REST API, Node.js HTTP module

## Cara Menjalankan

### Prerequisites
- Node.js (v14 atau lebih baru)
- npm
- PHP (untuk Tugas 2)

### Instalasi
```bash
git clone https://github.com/WiMProject/TestCode-MAQDIS-Academy.git
cd "TestCode MAQDIS Academy"
```

### Menjalankan Tugas

#### Tugas 2 - String Concatenation
```bash
cd "Tugas 2"
node type.js        # Node.js version
php type.php        # PHP version
```

#### Tugas 3 - Conditional Logic
```bash
cd "Tugas 3"
node conditional.js
```

#### Tugas 4 - Looping
```bash
cd "Tugas 4"
node looping.js
```

#### Tugas 5 - API Sederhana
```bash
cd "Tugas 5"
npm install
npm start
# Server akan berjalan di http://localhost:3000
```

## API Endpoints (Tugas 5)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /hello   | Welcome message |
| POST   | /data    | Add data |
| DELETE | /data    | Delete data |
| GET    | /setoran | Get setoran data |

## Teknologi yang Digunakan
- **JavaScript/Node.js** - Runtime utama
- **Express.js** - Web framework untuk API
- **PHP** - Alternative implementation
- **Git** - Version control
- **npm** - Package manager

## Best Practices Applied
- Clean code structure dan modular programming
- Proper error handling dan input validation
- RESTful API design dengan HTTP status codes
- MVC architecture pattern (Tugas 5)
- Automated testing dan documentation
- Version control dengan Git

## Author
**Wildan Miladji**

## Testing

### Tugas 5 - API Testing
```bash
cd "Tugas 5"
npm install
npm start     # Start server
npm test      # Run automated tests (di terminal lain)
```

## Repository
[GitHub Repository](https://github.com/WiMProject/TestCode-MAQDIS-Academy.git)