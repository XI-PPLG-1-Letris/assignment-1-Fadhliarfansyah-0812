//- Mini Calculator

// Variabel
let a = 10;
let b = 20;

// Arrow functions
const tambah = (a, b) => a + b;
const kurang = (a, b) => a - b;
const kali = (a, b) => a * b;
const bagi = (a, b) => a / b;
const modulus = (a, b) => a % b;

// Tampilkan nilai awal
console.log(`a = ${a}`);
console.log(`b = ${b}`);

// Tampilan hasil operasi aritmatika
console.log(`Penjumlahan ${a} + ${b} = ${tambah(a, b)}`);
console.log(`Pengurangan ${a} - ${b} = ${kurang(a, b)}`);
console.log(`Perkalian ${a} x ${b} = ${kali(a, b)}`);
console.log(`Pembagian ${a} / ${b} = ${bagi(a, b)}`);
console.log(`Modulus ${a} % ${b} = ${modulus(a, b)}`);