// const foo = ['Budi', 'Sita', 'Ayu'];

// // menyimpan nama ke dalam variabel
// const a = foo[0];
// const b = foo[1];
// const c = foo[2];

// // memanggil variabel a, b, c
// console.log(a, b, c);

// let bdays = ['10-17', '05-19', '20-19']

// // ubah '-' menjadi '/' untuk setiap index pada array bdays
// let bdaysBaru = bdays.map(x => x.replace(/-/g, "/"));

// console.log({bdaysBaru})

// let value = [1, 2, 3, 4, 5, 6]

// // mengalikan setiap value dengan 2
// let valueBaru = value.map(x => x * 2);

// // menampilkan valueBaru
// console.log({valueBaru})

let arr = [1.5, 2.56, 5.1, 12.33]

// pembulatan angka desimal dengan method math
let arrBaru = arr.map(x => Math.round(x))

// tampilkan arrBaru
console.log({arrBaru})