//- Mini Calculator

//variabel
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
console.log(`b = ${b}\n`);

// Tampilan hasil operasi aritmatika
console.log(`tambah(a, b)\nlog : Penjumlahan ${a} + ${b} = ${tambah(a, b)}\n`);
console.log(`kurang(a, b)\nlog : Pengurangan ${a} - ${b} = ${kurang(a, b)}\n`);
console.log(`kali(a, b)\nlog : Perkalian ${a} x ${b} = ${kali(a, b)}\n`);
console.log(`bagi(a, b)\nlog : Pembagian ${a} / ${b} = ${bagi(a, b)}\n`);
console.log(`modulus(a, b)\nlog : Modulus ${a} % ${b} = ${modulus(a, b)}\n`);