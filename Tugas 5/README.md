# Tugas 5 - API Sederhana (Dual Implementation)

Yang paling menantang! Saya membuat REST API dengan 2 implementasi berbeda untuk menunjukkan versatility dalam backend development.

## Mengapa 2 Implementasi?

Saya ingin membandingkan dan mengkontraskan antara:
- **Express.js** - Manual MVC implementation, fleksibel
- **Lumen** - Framework MVC conventions, terstruktur

Keduanya memiliki pendekatan berbeda namun sama-sama professional.

## Struktur Project

```
Tugas 5/
├── express-api/          # Node.js Express implementation
│   ├── app.js           # Main app + routes
│   ├── controllers/     # Business logic
│   └── package.json     
└── lumen-api/           # PHP Lumen implementation  
    ├── routes/web.php   # API routes
    ├── app/Http/Controllers/ # Controllers
    └── composer.json    
```

## API Endpoints (Keduanya)

Kedua implementasi menyediakan endpoints yang identik:

| Method | Endpoint | Response |
|--------|----------|----------|
| GET | `/hello` | `{"status": "success", "message": "welcome to Maqdis Academy"}` |
| POST | `/data` | `{"data": 100, "status": "berhasil"}` |
| DELETE | `/data` | `{"data": 0, "status": "berhasil hapus"}` |
| GET | `/setoran` | `{"message": "berhasil", "id_setoran": 58, "id_user": 3441, "id_juz": 30}` |

## Cara Menjalankan

### Express.js Version
```bash
cd express-api
npm install && npm start
# Server: http://localhost:3000
```

### Lumen Version  
```bash
cd lumen-api
composer install
php -S localhost:8000 -t public
# Server: http://localhost:8000
```

## Testing

Dapat ditest menggunakan cURL atau Postman:

```bash
# Express (port 3000)
curl http://localhost:3000/hello

# Lumen (port 8000)  
curl http://localhost:8000/hello
```

## Perbandingan Pendekatan

### Express.js Approach
- **Manual MVC** - Custom implementation
- **Pragmatis** - Routes di app.js, controller terpisah
- **Fleksibel** - Dapat distruktur sesuai kebutuhan
- **90 lines total** - Compact namun lengkap

### Lumen Approach  
- **Framework MVC** - Laravel conventions
- **Terstruktur** - Standard framework pattern
- **Scalable** - Framework-ready architecture
- **80 lines total** - Framework efficiency

## Yang Saya Pelajari

- **Different approaches** untuk masalah yang sama
- **MVC pattern** implementation (manual vs framework)
- **REST API design** principles
- **Best practices** dalam backend development
- **Framework vs custom** trade-offs

Kedua pendekatan memiliki kelebihan masing-masing dan menunjukkan aspek berbeda dari professional development.

---
*Wildan Miladji*