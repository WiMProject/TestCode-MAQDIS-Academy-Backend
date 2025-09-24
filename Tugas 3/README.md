# Tugas 3 - Conditional Logic & Werewolf Game

Game Werewolf interaktif dengan validasi input dan conditional logic sesuai requirement.

## Deskripsi
Program ini menggabungkan:
- **Conditional Logic** - Validasi input nama dan peran sesuai requirement
- **Interactive Game** - Game Werewolf yang bisa dimainkan dengan day/night cycle
- **Input Validation** - Error handling dan looping untuk input yang salah
- **Case Insensitive** - Menerima input huruf besar/kecil

## Requirement yang Dipenuhi
   Validasi nama kosong: "Nama harus diisi!"
   Validasi peran kosong: "Halo [nama], Pilih peranmu untuk memulai game!"
   Pesan selamat datang untuk setiap peran
   Input/Output (I/O) menggunakan readline
   Conditional logic dengan switch case

## Cara Menjalankan
```bash
cd "Tugas 3"
node conditional.js
```

## Input yang Diterima
**Nama:** Default "John" jika kosong
**Peran:** Case insensitive
- `penyihir`, `Penyihir`, `PENYIHIR`, `witch`, `seer`
- `guard`, `Guard`, `GUARD`, `guardian`, `protector`
- `werewolf`, `Werewolf`, `WEREWOLF`, `wolf`, `ww`

## Game Features
- **Setup Phase** - Input nama dan peran dengan validasi
- **Day Phase** - Vote eliminasi dan gunakan kemampuan
- **Night Phase** - Werewolf serang, Guard lindungi
- **Win Conditions** - Villagers vs Werewolves
- **Menu System** - Ganti nama/peran, lihat status

## Peran & Kemampuan
- **Penyihir** - Lihat identitas pemain lain
- **Guard** - Lindungi pemain dari serangan
- **Werewolf** - Serang pemain di malam hari

## Author
Wildan Miladji