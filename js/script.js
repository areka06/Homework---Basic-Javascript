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
            }, 1000);
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
        return `Rata-rata pendaftar memiliki uang sangu sebesar Rp ${avgMoney.toLocaleString('id-ID', { minimumFractionDigits: 2 })} dengan rata-rata umur ${avgAge.toFixed(1)} tahun`;
    }
}

const system = new RegistrationSystem();

document.getElementById('registrationForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const money = parseInt(document.getElementById('money').value);

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

document.getElementById('list-tab').addEventListener('shown.bs.tab', updateTable);
