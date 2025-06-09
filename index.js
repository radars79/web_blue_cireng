// Navbar toggle untuk mobile
const navbarnav = document.querySelector('.navbar-nav');
document.querySelector('#menu').onclick = () => {
  navbarnav.classList.toggle('active');
};

const stokMaks = 60;
const hargaPerPcs = 3000;

const kurangBtn = document.getElementById("kurang");
const tambahBtn = document.getElementById("tambah");
const jumlahInput = document.getElementById("jumlah");
const totalHarga = document.getElementById("total-harga");
const stokDisplay = document.getElementById("stok");
const checkoutBtn = document.getElementById("checkout-wa");

// Inisialisasi stok di localStorage jika belum ada
// if (localStorage.getItem('stokCireng') === null) {
//   localStorage.setItem('stokCireng', stokMaks.toString());
// }

// untuk demo
localStorage.setItem('stokCireng', '60');

let stok = parseInt(localStorage.getItem('stokCireng'));
let jumlah = 0;


function updateUI() {
  jumlah = parseInt(jumlahInput.value) || 0;

  if (jumlah > stok) {
    jumlah = stok;
    jumlahInput.value = jumlah;
    alert('Maaf, stok cireng sudah habis.');
  } else if (jumlah < 0) {
    jumlah = 0;
    jumlahInput.value = jumlah;
  }

  totalHarga.textContent = `Total: Rp ${(jumlah * hargaPerPcs).toLocaleString()}`;
  stokDisplay.textContent = `Stok tersedia: ${stok}`;
}

tambahBtn.addEventListener('click', () => {
  jumlah = parseInt(jumlahInput.value) || 0;
  if (jumlah < stok) {
    jumlah++;
    jumlahInput.value = jumlah;
  } else {
    alert('Maaf, stok cireng sudah habis.');
  }
  updateUI();
});

kurangBtn.addEventListener('click', () => {
  jumlah = parseInt(jumlahInput.value) || 0;
  if (jumlah > 0) {
    jumlah--;
    jumlahInput.value = jumlah;
  }
  updateUI();
});

jumlahInput.addEventListener('input', updateUI);

checkoutBtn.addEventListener('click', () => {
  jumlah = parseInt(jumlahInput.value) || 0;
  if (jumlah > 0) {
    stok -= jumlah;
    localStorage.setItem('stokCireng', stok.toString());

    const pesan = `Assalamualaikum, saya mau beli ${jumlah} cireng dengan metode pembayaran COD.`;
    const url = `https://wa.me/628981200108?text=${encodeURIComponent(pesan)}`;

    jumlah = 0;
    jumlahInput.value = jumlah;
    updateUI();

    window.open(url, '_blank');
  } else {
    alert('Silakan pilih jumlah terlebih dahulu.');
  }
});


updateUI(); // Inisialisasi UI saat pertama
