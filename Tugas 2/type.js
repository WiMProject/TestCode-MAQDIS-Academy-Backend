// Tugas 2 - String Concatenation
// Menggabungkan 4 variabel string menjadi satu kalimat

const variable1 = "MAQDIS";
const variable2 = 'Academy';
const variable3 = 'is';
const variable4 = 'awesome';

// Menggabungkan variabel menjadi satu kalimat
const sentence = `${variable1} ${variable2} ${variable3} ${variable4}`;

// Output hasil
console.log(sentence);

// Export untuk testing jika diperlukan
module.exports = {
  variable1,
  variable2,
  variable3,
  variable4,
  sentence
};