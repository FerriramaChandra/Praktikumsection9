// Problem 1 analysis

class user { 
    var id;
    var username;
    var password;
}
// Penamaan class umumnya menggunakan Pascal Case, untuk variabel menggunakan Uppercase untuk Const atau snake_case/kebab-case jika memiliki spasi
class userservice {
    user[] users = []; // Array termasuk dalam variabel tipe structure, sehingga baiknya menggunakan Uppercase

    user[] getallusers() { // Penamaan function baiknnya menggunakan camelCase dalam penamaannya
        return users ;
    }
    user getuserbyid(userid) { //Untuk parameter yang digunakan baiknya menggunakan cara penamaan yang mirip dengan variabel, untuk bagian id, menggunakan huruf kapital (ID)
        return users.filter(userid);
    }
}





// Problem 2 rewrite
class kendaraan { // Penamaan class menggunakan Pascal Case
    var totalroda = 0; // Penulisan variabel menggunakan snake_case/kebab-case, pengecualian untuk Const, menggunakan Uppercase
    var kecepatanperjam = 0; 
}

class mobil extends kendaraan {
    void berjalan() { // Penamaan function menggunakan camelCase
        tambahkendaraan (10);
    }
    tambahkecepatan(var kecepatanbaru) {
        kecepatanperjam = kecepatanperjam + kecepatanbaru;
    }
}

void main() {
    mobilcepat = new mobil();
    mobilcepat.berjalan();
    mobilcepat.berjalan();
    mobilcepat.berjalan();
    
    mobillamban = new mobil();
    mobillamban.berjalan();
}


// Perbaikan
class Kendaraan {
    var total_roda = 0;
    var kecepatan_per_jam = 0;
}

class Mobil extends Kendaraan {
    void berjalan() {
        tambahKendaraan (10);
    }
    tambahKecepatan(var kecepatan_baru) {
        kecepatan_per_jam = kecepatan_per_jam + kecepatan_baru;
    }
}

void main() {
    mobil_cepat = new Mobil();
    mobil_cepat.berjalan();
    mobil_cepat.berjalan();
    mobil_cepat.berjalan();
    
    mobil_lamban = new Mobil();
    mobil_lamban.berjalan();
}