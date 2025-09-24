// Tugas 4 - Looping
// Membuat looping maju dan mundur dengan bilangan genap

console.log("LOOPING PERTAMA");
// Looping maju dari 2 sampai 20 (bilangan genap) menggunakan for
for (let i = 2; i <= 20; i += 2) {
  console.log(`${i} - I love coding`);
}

console.log("LOOPING KEDUA");
// Looping mundur dari 20 sampai 2 (bilangan genap) menggunakan while
let j = 20;
while (j >= 2) {
  console.log(`${j} - I will become a mobile developer`);
  j -= 2;
}