/**
 * Tugas 3 - Conditional Logic & Werewolf Game
 * Program sederhana untuk validasi input nama dan peran werewolf
 * Author: Wildan Miladji
 * 
 * Fitur:
 * - Input validation nama dan peran
 * - Conditional logic untuk response game
 * - Error handling yang proper
 * - Clean code structure
 */

const readline = require('readline');

/**
 * Konstanta untuk menyimpan pesan setiap peran
 * Dibuat sebagai object untuk kemudahan maintenance dan extensibility
 */
const ROLES = {
  penyihir: 'kamu dapat melihat siapa yang menjadi werewolf!',
  guard: 'kamu akan membantu melindungi temanmu dari serangan werewolf.',
  werewolf: 'Kamu akan memakan mangsa setiap malam!'
};

/**
 * Fungsi untuk validasi input dari user
 * Mengecek apakah nama dan peran sudah diisi atau belum
 * @param {string} nama - Nama pemain
 * @param {string} peran - Peran yang dipilih
 * @returns {string|null} - Error message atau null jika valid
 */
function validateInput(nama, peran) {
  // Cek nama kosong atau hanya spasi
  if (!nama.trim()) return "Nama harus diisi!";
  
  // Jika nama ada tapi peran kosong
  if (!peran.trim()) return `Halo ${nama}, Pilih peranmu untuk memulai game!`;
  
  // Jika semua valid, return null
  return null;
}

/**
 * Fungsi untuk generate pesan sesuai peran yang dipilih
 * Normalize input untuk case insensitive
 * @param {string} nama - Nama pemain
 * @param {string} peran - Peran yang dipilih
 * @returns {string|null} - Role message atau null jika peran tidak valid
 */
function getRoleMessage(nama, peran) {
  // Normalize peran menjadi lowercase untuk case insensitive
  const normalizedRole = peran.toLowerCase().trim();
  const roleMessage = ROLES[normalizedRole];
  
  // Jika peran tidak ada di ROLES object
  if (!roleMessage) return null;
  
  // Capitalize first letter untuk tampilan yang rapi
  const capitalizedRole = peran.charAt(0).toUpperCase() + peran.slice(1).toLowerCase();
  return `Halo ${capitalizedRole} ${nama}, ${roleMessage}`;
}

/**
 * Fungsi utama program
 * Menggunakan async/await untuk code yang lebih clean
 */
async function main() {
  // Membuat interface untuk input/output
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    // Ambil input nama dari user
    const nama = await new Promise(resolve => {
      rl.question('Masukkan nama: ', resolve);
    });
    
    // Ambil input peran dari user
    const peran = await new Promise(resolve => {
      rl.question('Masukkan peran: ', resolve);
    });

    // Validasi input terlebih dahulu sebelum proses
    const validationError = validateInput(nama, peran);
    if (validationError) {
      console.log(validationError);
      return; // Keluar dari fungsi jika ada error
    }

    // Jika validasi lolos, tampilkan welcome message
    console.log(`Selamat datang di Dunia Werewolf, ${nama}`);
    
    // Generate dan tampilkan pesan sesuai peran
    const roleMessage = getRoleMessage(nama, peran);
    if (roleMessage) {
      console.log(roleMessage);
    }
    
  } finally {
    // Pastikan readline interface ditutup untuk mencegah memory leak
    rl.close();
  }
}

// Jalankan program jika file ini dieksekusi langsung
if (require.main === module) {
  main().catch(console.error);
}

// Export functions untuk testing atau penggunaan di file lain
module.exports = { validateInput, getRoleMessage };