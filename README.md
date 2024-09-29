# Sistem Registrasi Modern
Duta Ardhika Wahyu Nugraha - Universitas Jember

## Deskripsi

Sistem Registrasi Modern adalah aplikasi web interaktif yang memungkinkan pengguna untuk melakukan registrasi dan mengelola daftar pendaftar. Aplikasi ini dirancang menggunakan **HTML**, **CSS** (dengan **Bootstrap**), dan **JavaScript**. Dengan pendekatan **Object-Oriented Programming (OOP)**, aplikasi ini memastikan pengelolaan data yang lebih baik dan terstruktur. 

## Fitur Utama

- **Form Registrasi**: Pengguna dapat mendaftar dengan memasukkan nama, umur, dan uang saku.
- **Validasi Input**: Data yang dimasukkan akan divalidasi untuk memastikan bahwa semua persyaratan terpenuhi.
- **Daftar Pendaftar**: Tampilkan daftar pendaftar yang telah berhasil melakukan registrasi.
- **Ringkasan Statistik**: Menyediakan informasi statistik tentang pendaftar, termasuk rata-rata umur dan uang saku.

## Teknologi yang Digunakan

- **HTML**: Menyediakan struktur dasar untuk aplikasi.
- **CSS**: Menggunakan Bootstrap untuk membuat tampilan responsif dan menarik.
- **JavaScript**: Menangani logika aplikasi, manipulasi DOM, dan interaksi pengguna.
- **Bootstrap**: Framework CSS yang memudahkan pembuatan desain yang responsif.

## Cara Menggunakan

1. **Mengisi Form Registrasi**:
   - Masukkan **Nama**: Pastikan nama yang dimasukkan memiliki minimal 10 karakter.
   - Masukkan **Umur**: Harus 25 tahun atau lebih.
   - Masukkan **Uang Saku**: Nilai antara Rp 100.000 hingga Rp 1.000.000. Gunakan titik (.) untuk memisahkan ribuan (misalnya, 100.000).

2. **Submit Form**:
   - Setelah semua data terisi, klik tombol **Submit**.
   - Jika data valid, pendaftar akan ditambahkan dan Anda akan menerima notifikasi "Registrasi berhasil!".
   - Jika data tidak valid, pesan kesalahan akan muncul untuk membantu Anda memperbaiki input.

3. **Melihat Daftar Pendaftar**:
   - Klik tab **List Pendaftar** untuk melihat daftar pendaftar yang telah terdaftar.
   - Anda juga akan melihat ringkasan statistik yang menunjukkan rata-rata umur dan uang saku pendaftar.

## Contoh Penerapan

### 1. OOP (Object-Oriented Programming)
- **Kelas `Registrant`**: 
  - Menyimpan informasi mengenai pendaftar (nama, umur, uang saku).
  - Contoh Implementasi:
    ```javascript
    class Registrant {
        constructor(name, age, money) {
            this.name = name;
            this.age = age;
            this.money = money;
        }
    }
    ```
  
- **Kelas `RegistrationSystem`**:
  - Menangani logika pendaftaran, validasi data, dan penghitungan statistik.
  - Contoh Implementasi:
    ```javascript
    class RegistrationSystem {
        constructor() {
            this.registrants = [];
        }

        addRegistrant(registrant) {
            return new Promise((resolve, reject) => {
                if (this.validateRegistrant(registrant)) {
                    this.registrants.push(registrant);
                    resolve(registrant);
                } else {
                    reject(new Error("Data tidak valid"));
                }
            });
        }

        validateRegistrant(registrant) {
            return registrant.name.length >= 10 &&
                   registrant.age >= 25 &&
                   registrant.money >= 100000 &&
                   registrant.money <= 1000000;
        }
    }
    ```

### 2. DOM (Document Object Model)
- Menggunakan JavaScript untuk memanipulasi elemen HTML. Misalnya, menambahkan data pendaftar ke tabel dan memperbarui ringkasan statistik secara dinamis.
- Contoh Implementasi:
    ```javascript
    document.getElementById('registrationForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const age = parseInt(document.getElementById('age').value);
        const money = parseInt(document.getElementById('money').value);
        
        const registrant = new Registrant(name, age, money);
        await system.addRegistrant(registrant);
        updateTable();
    });
    ```

### 3. Asynchronous
- Menggunakan `Promise` untuk menangani operasi penambahan pendaftar secara asynchronous, memastikan UI tetap responsif.
- Contoh Implementasi:
    ```javascript
    await system.addRegistrant(registrant);
    ```

### 4. Perulangan
- Menggunakan `forEach` untuk iterasi melalui array `registrants` dan menampilkan setiap pendaftar dalam tabel.
- Contoh Implementasi:
    ```javascript
    system.getRegistrants().forEach(registrant => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = registrant.name;
        row.insertCell(1).textContent = registrant.age;
        row.insertCell(2).textContent = `Rp ${registrant.money.toLocaleString('id-ID')}`;
    });
    ```

### 5. Percabangan
- Menggunakan pernyataan `if` dalam metode `validateRegistrant` untuk memeriksa apakah data yang dimasukkan memenuhi syarat.
- Contoh Implementasi:
    ```javascript
    if (this.validateRegistrant(registrant)) {
        this.registrants.push(registrant);
        resolve(registrant);
    } else {
        reject(new Error("Data tidak valid"));
    }
    ```

### 6. Array
- Menyimpan daftar pendaftar dalam array `registrants`, yang memudahkan pengelolaan dan pengambilan data.
- Contoh Implementasi:
    ```javascript
    this.registrants = []; // Inisialisasi array untuk menyimpan pendaftar
    ```

## Cara Mencoba Aplikasi

Untuk mencoba aplikasi ini, Anda dapat mengunjungi tautan berikut:

[**Preview di GitHub Pages**](https://areka06.github.io/Homework---Basic-Javascript/)

## Struktur Proyek

```
/Sistem Registrasi Modern
│
├── index.html            # Halaman utama aplikasi
├── style.css             # File CSS untuk styling (jika diperlukan)
└── script.js             # File JavaScript untuk logika aplikasi
```

## Kontribusi

Kami sangat menghargai kontribusi dari komunitas. Jika Anda ingin berkontribusi pada proyek ini, silakan ikuti langkah-langkah berikut:

1. Fork repositori ini.
2. Buat cabang baru (`git checkout -b fitur-anda`).
3. Lakukan perubahan yang diinginkan dan commit (`git commit -m 'Menambahkan fitur baru'`).
4. Push ke cabang Anda (`git push origin fitur-anda`).
5. Buat pull request untuk mengusulkan perubahan Anda.

