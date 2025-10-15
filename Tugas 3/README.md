# Tugas 3 - Conditional Logic

Implementasi conditional logic sederhana untuk validasi input nama dan peran. Program ini mendemonstrasikan penggunaan if-else statement dan input validation sesuai requirement.

## Deskripsi

Program sederhana yang melakukan:
- **Input validation** untuk nama dan peran
- **Conditional logic** dengan if-else statement
- **Case insensitive input** - dapat menggunakan huruf besar/kecil
- **Response message** sesuai dengan peran yang dipilih

## Requirement yang Dipenuhi

✅ Validasi nama kosong: "Nama harus diisi!"  
✅ Validasi peran kosong: "Halo [nama], Pilih peranmu untuk memulai game!"  
✅ Welcome message untuk setiap peran  
✅ I/O menggunakan readline  
✅ Conditional logic dengan if-else statement  

## Cara Menjalankan

**JavaScript Version:**
```bash
node conditional.js
```

**PHP Version:**
```bash
php conditional.php
```

## Input dan Output

**Input yang diterima:**
- **Nama:** String (jika kosong akan ada pesan error)
- **Peran:** penyihir, guard, atau werewolf (case insensitive)

**Contoh Output:**

```
Input: nama = "", peran = ""
Output: "Nama harus diisi!"

Input: nama = "John", peran = ""  
Output: "Halo John, Pilih peranmu untuk memulai game!"

Input: nama = "Jane", peran = "Penyihir"
Output: "Selamat datang di Dunia Werewolf, Jane"
        "Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!"

Input: nama = "Bob", peran = "Guard"
Output: "Selamat datang di Dunia Werewolf, Bob"
        "Halo Guard Bob, kamu akan membantu melindungi temanmu dari serangan werewolf."

Input: nama = "Alice", peran = "Werewolf"  
Output: "Selamat datang di Dunia Werewolf, Alice"
        "Halo Werewolf Alice, Kamu akan memakan mangsa setiap malam!"
```

## Peran yang Tersedia

- **Penyihir** - "kamu dapat melihat siapa yang menjadi werewolf!"
- **Guard** - "kamu akan membantu melindungi temanmu dari serangan werewolf."  
- **Werewolf** - "Kamu akan memakan mangsa setiap malam!"

## Yang Saya Pelajari

- Conditional logic dengan if-else statement
- Input validation dan error handling
- String manipulation dan case handling
- I/O operations dengan readline (JS) dan fgets (PHP)
- Clean code structure dan proper documentation

Program ini fokus pada fundamental conditional logic sesuai requirement, dengan implementasi yang clean dan mudah dipahami.

---
*Wildan Miladji*