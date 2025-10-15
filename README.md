# TestCode MAQDIS Academy Backend

Halo! Ini adalah project skill test backend development untuk MAQDIS Academy. Saya membuat ini untuk menunjukkan kemampuan programming fundamental yang telah saya pelajari.

## Overview Project

Project ini terdiri dari 4 tugas utama yang mencakup berbagai aspek backend development:

### Tugas 2 - String Concatenation
Tugas pertama yang sederhana namun fundamental, menggabungkan 4 variabel string menjadi satu kalimat "MAQDIS Academy is awesome". Saya implementasikan dalam 2 versi:
- `type.js` - Versi JavaScript/Node.js
- `type.php` - Versi PHP untuk Laravel/Lumen

# Tugas 3 - Conditional Logic

Implementasi conditional logic sederhana untuk validasi input nama dan peran. Program ini mendemonstrasikan penggunaan if-else statement dan input validation sesuai requirement.

### Tugas 4 - Looping
Implementasi looping maju mundur menggunakan bilangan genap. Sederhana namun penting untuk memahami konsep dasar looping:
- For loop untuk hitungan maju (2-20)
- While loop untuk hitungan mundur (20-2)

### Tugas 5 - API Sederhana
Yang paling kompleks! Membuat REST API menggunakan Express.js dan Lumen dengan:
- MVC pattern yang proper
- Error handling dan logging
- CORS support
- Clean architecture

## Cara Menjalankan Project

### Prerequisites:
- Node.js (minimal v14)
- npm
- PHP (untuk versi PHP)
- Git

### Clone Repository:
```bash
git clone https://github.com/WiMProject/TestCode-MAQDIS-Academy-Backend.git
cd TestCode-MAQDIS-Academy-Backend
```

### Menjalankan per Tugas:

**Tugas 2:**
```bash
cd "Tugas 2"
node type.js     # atau
php type.php
```

**Tugas 3:**
```bash
cd "Tugas 3"
node conditional.js
```

**Tugas 4:**
```bash
cd "Tugas 4"
node looping.js
```

**Tugas 5:**
```bash
# Express version
cd "Tugas 5/express-api"
npm install && npm start

# Lumen version
cd "Tugas 5/lumen-api"
composer install
php -S localhost:8000 -t public
```

## API Endpoints (Tugas 5)

| Method | Endpoint | Response |
|--------|----------|----------|
| GET | `/hello` | Welcome message |
| POST | `/data` | Create data |
| DELETE | `/data` | Delete data |
| GET | `/setoran` | Get setoran info |

## Tech Stack

- **JavaScript/Node.js** - Main language
- **Express.js** - Web framework
- **PHP/Lumen** - Alternative implementation
- **Git** - Version control

## Tujuan Project

Saya ingin menunjukkan bahwa saya mampu:
- Menulis code yang clean dan maintainable
- Mengimplementasikan best practices dalam backend development
- Membuat API yang proper dengan error handling
- Menggunakan berbagai teknologi (JS, PHP, framework)
- Membuat dokumentasi yang jelas dan komprehensif

## Screenshots

### Tugas 5 - API Sederhana

Hasil testing API menggunakan Postman untuk semua endpoints:

#### Express.js API Testing

**1. API Info**
![Express API Info](Hasil%20Screenshoot/express/express1.png)

**2. GET /hello - Welcome Message**
![Express Hello](Hasil%20Screenshoot/express/express2.png)

**3. POST /data - Create Data**
![Express Create Data](Hasil%20Screenshoot/express/express3.png)

**4. DELETE /data - Delete Data**
![Express Delete Data](Hasil%20Screenshoot/express/express4.png)

**5. GET /setoran - Get Setoran**
![Express Get Setoran](Hasil%20Screenshoot/express/express5.png)

#### Lumen API Testing

**1. API Info**
![Lumen API Info](Hasil%20Screenshoot/lumen/lumen1.png)

**2. GET /hello - Welcome Message**
![Lumen Hello](Hasil%20Screenshoot/lumen/lumen2.png)

**3. POST /data - Create Data**
![Lumen Create Data](Hasil%20Screenshoot/lumen/lumen3.png)

**4. DELETE /data - Delete Data**
![Lumen Delete Data](Hasil%20Screenshoot/lumen/lumen4.png)

**5. GET /setoran - Get Setoran**
![Lumen Get Setoran](Hasil%20Screenshoot/lumen/lumen5.png)

## Testing

Untuk testing API:
```bash
# Test Express API
curl http://localhost:3000/hello

# Test Lumen API  
curl http://localhost:8000/hello
```

---

**Dibuat oleh Wildan Miladji**

Jika ada pertanyaan atau feedback, silakan hubungi saya.