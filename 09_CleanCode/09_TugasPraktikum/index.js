class Kendaraan {  
    totalRoda = 0;
    kecepatanPerJam = 0;
}

class Mobil extends Kendaraan {
    tambahKecepatan(kecepatanBaru) {
        this.kecepatanPerJam = this.kecepatanPerJam + kecepatanBaru;
        return this.kecepatanPerJam;
    }
    berjalan() {
        this.tambahKecepatan(10);
    }
}

let mobilCepat = new Mobil();
mobilCepat.berjalan();
mobilCepat.berjalan();
mobilCepat.berjalan();
console.log("Mobil Cepat kecepatannya : " + mobilCepat.kecepatanPerJam)

let mobilLamban = new Mobil();
mobilLamban.berjalan();
console.log("Mobil Lamban kecepatannya : " + mobilLamban.kecepatanPerJam)


