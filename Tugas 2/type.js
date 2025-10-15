/**
 * Tugas 2 - String Concatenation
 * Program sederhana untuk menggabungkan 4 variabel string
 * Author: Wildan Miladji
 * 
 * Requirement:
 * - Menggabungkan 4 variabel string menjadi satu kalimat
 * - Output: "MAQDIS Academy is awesome"
 */

// Deklarasi 4 variabel string sesuai requirement
const variable1 = "MAQDIS";
const variable2 = 'Academy';
const variable3 = 'is';
const variable4 = 'awesome';

/**
 * Fungsi untuk menggabungkan variabel string
 * Menggunakan template literals untuk clean dan readable code
 * @returns {string} - Kalimat hasil gabungan
 */
function concatenateStrings() {
  return `${variable1} ${variable2} ${variable3} ${variable4}`;
}

// Generate kalimat hasil gabungan
const sentence = concatenateStrings();

// Output hasil ke console
console.log(sentence);

// Export semua variabel dan fungsi untuk testing
module.exports = {
  variable1,
  variable2,
  variable3,
  variable4,
  sentence,
  concatenateStrings
};