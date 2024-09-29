// Implementasi OOP
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
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.validateRegistrant(registrant)) {
                    this.registrants.push(registrant);
                    resolve(registrant);
                } else {
                    reject(new Error("Data tidak valid"));
                }
            }, 1000); // Simulasi operasi asynchronous
        });
    }

    validateRegistrant(registrant) {
        return registrant.name.length >= 10 &&
               registrant.age >= 25 &&
               registrant.money >= 100000 &&
               registrant.money <= 1000000;
    }

    getRegistrants() {
        return this.registrants;
    }

    getSummary() {
        const totalAge = this.registrants.reduce((sum, reg) => sum + reg.age, 0);
        const totalMoney = this.registrants.reduce((sum, reg) => sum + reg.money, 0);
        const avgAge = totalAge / this.registrants.length || 0;
        const avgMoney = totalMoney / this.registrants.length || 0;

        const formattedAvgMoney = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(avgMoney); // Format uang sangu

        return `Rata-rata pendaftar memiliki uang sangu sebesar ${formattedAvgMoney} dengan rata-rata umur ${avgAge.toFixed(1)} tahun`;
    }
}

// Inisialisasi sistem registrasi
const system = new RegistrationSystem();

// DOM manipulation
document.getElementById('registrationForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const money = parseInt(document.getElementById('money').value.replace(/\./g, '').replace(/,/g, '')); // Format input uang

    const registrant = new Registrant(name, age, money);

    try {
        await system.addRegistrant(registrant);
        alert("Registrasi berhasil!");
        updateTable();
        this.reset();
    } catch (error) {
        alert(error.message);
    }
});

function updateTable() {
    const tableBody = document.getElementById('registrantList');
    const summary = document.getElementById('summary');
    tableBody.innerHTML = '';

    system.getRegistrants().forEach(registrant => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = registrant.name;
        row.insertCell(1).textContent = registrant.age;
        row.insertCell(2).textContent = `Rp ${registrant.money.toLocaleString('id-ID')}`;
    });

    summary.innerHTML = `<i class="fas fa-chart-bar me-2"></i>${system.getSummary()}`;
}

// Inisialisasi tab
document.getElementById('list-tab').addEventListener('shown.bs.tab', updateTable);
