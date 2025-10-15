/**
 * Tugas 4 - Looping Implementation
 * Program untuk demonstrasi looping maju dan mundur dengan bilangan genap
 * Author: Wildan Miladji
 * 
 * Requirement:
 * - Looping pertama: For loop maju 2-20 (genap)
 * - Looping kedua: While loop mundur 20-2 (genap)
 * - Output dengan pesan yang berbeda
 */

/**
 * Konstanta untuk pesan output
 * Dibuat terpisah untuk kemudahan perubahan jika diperlukan
 */
const MESSAGES = {
  forward: "I love coding",
  backward: "I will become a mobile developer"
};

/**
 * Fungsi untuk looping maju menggunakan for loop
 * Menampilkan bilangan genap dari 2 sampai 20
 */
function forwardLoop() {
  console.log("LOOPING PERTAMA");
  
  // For loop untuk increment bilangan genap
  for (let i = 2; i <= 20; i += 2) {
    console.log(`${i} - ${MESSAGES.forward}`);
  }
}

/**
 * Fungsi untuk looping mundur menggunakan while loop
 * Menampilkan bilangan genap dari 20 sampai 2
 */
function backwardLoop() {
  console.log("LOOPING KEDUA");
  
  // While loop untuk decrement bilangan genap
  let j = 20;
  while (j >= 2) {
    console.log(`${j} - ${MESSAGES.backward}`);
    j -= 2; // Kurangi 2 untuk tetap genap
  }
}

/**
 * Fungsi utama untuk menjalankan semua looping
 * Memanggil kedua fungsi looping secara berurutan
 */
function main() {
  try {
    forwardLoop();
    backwardLoop();
  } catch (error) {
    console.error('Error during looping:', error.message);
  }
}

// Jalankan program jika file ini dieksekusi langsung
if (require.main === module) {
  main();
}

// Export functions untuk testing atau penggunaan di file lain
module.exports = {
  forwardLoop,
  backwardLoop,
  main,
  MESSAGES
};