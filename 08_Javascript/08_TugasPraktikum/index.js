let a = 5;
let b = "kampus merdeka";
let nama = "Budi";
let terdaftar = true; // Mengubah false jadi true
let lengkapArr = [a, b, nama, terdaftar];

// Menampilkan index ke-2 dalam lengkap_arr
// console.log(lengkap_arr[2])

function perkenalan() {
    let asal = "indonesia";
    nama = "Budi";
    return console.log(
        "perkenalkan nama saya " +
        nama +
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b +
        " berasal dari " +
        asal
    );
}

if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
    console.log("array = " + nama); //memanggil value variabel nama
}

a = b;
nama = b;

console.log("a adalah = " + a);
console.log("b adalah = " + b);

// Panggil function perkenalan
perkenalan()

// console.log("asal diakses = " + asal);

/* jelaskan kenapa baris 21,22,23 tidak dapat tampil? 
Karena block if dapat dijalankan jika terdaftar sama dengan true, sedangkan 
di line 4 terdaftar valuenya false */

/* b. jelaskan kenapa deklarasi pada baris 26 menyebabkan error?
Karena pada line 3 telah di deklarasikan bahwa nama itu tipe variabelnya const yang berarti
tidak dapat di re-assignment */

/* c. Dengan melakukan komen pada baris ke 26, apakah baris 28 dapat di eksekusi? jelaskan.
baris ke 28 tidak bisa di eksekusi dikarenakan variabel asal belum di deklarasikan
atau not defined, variabel asal yang di dalam function perkenalan() hanya dapat digunakan dalam 
block function tersebut  */ 