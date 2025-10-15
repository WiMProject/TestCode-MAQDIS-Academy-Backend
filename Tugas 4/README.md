# Tugas 4 - Looping Maju Mundur

Implementasi looping maju dan mundur menggunakan bilangan genap. Sederhana namun penting untuk memahami konsep dasar looping.

## Deskripsi

Dua jenis looping yang diimplementasikan:
1. **Looping maju** (2 → 20) menggunakan **for loop**
2. **Looping mundur** (20 → 2) menggunakan **while loop**

Semua menggunakan bilangan genap dengan pesan yang berbeda:
- Maju: "I love coding" 💻
- Mundur: "I will become a mobile developer" 📱

## Output yang Dihasilkan

```
LOOPING PERTAMA
2 - I love coding
4 - I love coding
...
20 - I love coding

LOOPING KEDUA  
20 - I will become a mobile developer
18 - I will become a mobile developer
...
2 - I will become a mobile developer
```

## Cara Menjalankan

```bash
node looping.js
```

## Teknik yang Digunakan

**For Loop (Maju):**
```javascript
for (let i = 2; i <= 20; i += 2) {
  // increment by 2 untuk mendapatkan bilangan genap
}
```

**While Loop (Mundur):**
```javascript
let j = 20;
while (j >= 2) {
  // decrement by 2
  j -= 2;
}
```

## Yang Saya Pelajari

- Perbedaan for loop vs while loop
- Increment dan decrement dengan step tertentu
- Modular programming dengan functions
- Clean code structure dan documentation

Meskipun sederhana, saya tetap menerapkan best practices seperti separation of concerns dan proper documentation.

---
*Wildan Miladji*