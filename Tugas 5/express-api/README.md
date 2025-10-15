# Express.js API - Sederhana namun Professional

Implementasi REST API menggunakan Express.js dengan MVC pattern. Saya membuat ini untuk menunjukkan bahwa meskipun "API Sederhana", tetap dapat menerapkan best practices yang proper.

## Filosofi Pengembangan

Saya ingin mencapai balance antara simplicity dan professionalism:
- **MVC pattern** untuk clean architecture
- **Controller separation** agar logic terpisah dari routing
- **Best practices** seperti CORS, logging, error handling
- **Tidak over-engineering** - sesuai dengan scope "API Sederhana"

## Struktur Project

```
express-api/
├── app.js                 # Main app + routes (45 lines)
├── controllers/           
│   └── apiController.js   # Business logic (50 lines)
├── package.json          
└── README.md             
```

Total hanya 95 lines - ukuran yang tepat!

## API Endpoints

| Method | Endpoint | Response |
|--------|----------|----------|
| GET | `/hello` | Welcome message |
| POST | `/data` | Create data (return 100) |
| DELETE | `/data` | Delete data (return 0) |
| GET | `/setoran` | Setoran info |

## Cara Menjalankan

```bash
npm install
npm start
```

Server akan berjalan di `http://localhost:3000`

## Testing dengan cURL

```bash
# Test semua endpoints
curl http://localhost:3000/hello
curl -X POST http://localhost:3000/data
curl -X DELETE http://localhost:3000/data  
curl http://localhost:3000/setoran
```

## Features yang Diimplementasikan

✅ **MVC Pattern** - Routes di app.js, logic di controller  
✅ **Request Logging** - Untuk tracking request masuk  
✅ **CORS Support** - Siap untuk frontend integration  
✅ **Error Handling** - 404 handler yang proper  
✅ **Clean Code** - Readable dan maintainable  

## Mengapa Routes di app.js?

Untuk 5 endpoints, saya merasa tidak perlu file routes terpisah. Pendekatan ini:
- **Praktis** - Semua routes terlihat di satu tempat
- **Sesuai scope** - Appropriate untuk project sederhana
- **Scalable** - Dapat dipisah nanti jika diperlukan

Ini contoh good judgment dalam software development - tidak over-engineer, namun tetap professional.

---
*Wildan Miladji*