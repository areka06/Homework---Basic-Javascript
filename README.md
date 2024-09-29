Here's a professional README template for your project, detailing the implementation of various programming concepts:

---

# Sistem Registrasi Modern

## Deskripsi Proyek
Sistem Registrasi Modern adalah aplikasi web yang memungkinkan pengguna untuk mendaftar dan melihat daftar pendaftar. Aplikasi ini dibangun menggunakan HTML, CSS (Bootstrap), dan JavaScript. Proyek ini dirancang untuk mempermudah pengelolaan data registrasi dengan antarmuka yang intuitif dan responsif.

## Fitur Utama
- **Formulir Registrasi:** Pengguna dapat mendaftar dengan memasukkan nama, umur, dan uang sangu.
- **Daftar Pendaftar:** Menampilkan daftar pendaftar yang telah terdaftar beserta ringkasan statistik.
- **Validasi Data:** Memastikan data yang dimasukkan memenuhi kriteria tertentu.

## Teknologi yang Digunakan
- **HTML:** Struktur dasar aplikasi.
- **CSS:** Menggunakan Bootstrap untuk gaya dan tata letak responsif.
- **JavaScript:** Menangani logika aplikasi dan interaksi pengguna.

## Implementasi

### 1. OOP (Object-Oriented Programming)
Proyek ini menggunakan konsep OOP dengan mendefinisikan dua kelas: `Registrant` dan `RegistrationSystem`. Kelas `Registrant` bertanggung jawab untuk menyimpan informasi pendaftar, sedangkan kelas `RegistrationSystem` mengelola pendaftar dan melakukan validasi data.

```javascript
class Registrant {
    constructor(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
}

class RegistrationSystem {
    constructor() {
        this.registrants = [];
    }

    addRegistrant(registrant) {
        // Logika untuk menambahkan pendaftar
    }
}
```

### 2. DOM (Document Object Model)
Aplikasi ini memanipulasi elemen DOM untuk menampilkan data pendaftar. Misalnya, setelah registrasi berhasil, informasi pendaftar ditambahkan ke tabel menggunakan DOM manipulation.

```javascript
function updateTable() {
    const tableBody = document.getElementById('registrantList');
    tableBody.innerHTML = '';

    system.getRegistrants().forEach(registrant => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = registrant.name;
        row.insertCell(1).textContent = registrant.age;
        row.insertCell(2).textContent = `Rp ${registrant.money.toLocaleString('id-ID')}`;
    });
}
```

### 3. Asynchronous
Proyek ini menerapkan pemrograman asinkron dengan menggunakan Promise untuk simulasi penambahan pendaftar secara asynchronous. Pengguna akan menerima notifikasi setelah proses registrasi selesai.

```javascript
addRegistrant(registrant) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (this.validateRegistrant(registrant)) {
                this.registrants.push(registrant);
                resolve(registrant);
            } else {
                reject(new Error("Data tidak valid"));
            }
        }, 1000);
    });
}
```

### 4. Perulangan
Perulangan digunakan untuk menampilkan daftar pendaftar dan menghitung ringkasan statistik. Dengan menggunakan `forEach`, data pendaftar ditampilkan di tabel.

```javascript
system.getRegistrants().forEach(registrant => {
    const row = tableBody.insertRow();
    row.insertCell(0).textContent = registrant.name;
    row.insertCell(1).textContent = registrant.age;
    row.insertCell(2).textContent = `Rp ${registrant.money.toLocaleString('id-ID')}`;
});
```

### 5. Percabangan
Logika percabangan digunakan dalam validasi data untuk memastikan bahwa input dari pengguna memenuhi syarat yang telah ditentukan.

```javascript
validateRegistrant(registrant) {
    return registrant.name.length >= 10 &&
           registrant.age >= 25 &&
           registrant.money >= 100000 &&
           registrant.money <= 1000000;
}
```

### 6. Array
Data pendaftar disimpan dalam sebuah array di dalam kelas `RegistrationSystem`. Array ini digunakan untuk menyimpan dan mengelola pendaftar.

```javascript
class RegistrationSystem {
    constructor() {
        this.registrants = []; // Array untuk menyimpan pendaftar
    }
}
```

## Cara Menggunakan
1. Klon repositori ini ke mesin lokal Anda.
2. Buka file `index.html` di browser Anda.
3. Isi formulir registrasi dan kirimkan.
4. Lihat daftar pendaftar yang telah terdaftar.

## Kontribusi
Jika Anda ingin berkontribusi pada proyek ini, silakan fork repositori ini dan buat permintaan pull.

## Lisensi
Proyek ini dilisensikan di bawah MIT License. Lihat file [LICENSE](LICENSE) untuk detail lebih lanjut.

---

Feel free to customize any part of the README to better fit your project!
