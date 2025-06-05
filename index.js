// Navbar toggle untuk mobile
  const navbarnav = document.querySelector('.navbar-nav');
  document.querySelector('#menu').onclick = () => {
    navbarnav.classList.toggle('active');
  };

  // Tombol dan elemen terkait pembelian
  const tombolBeli = document.getElementById('beli-sekarang');
  const detailPesanan = document.getElementById('detail-pesanan');
  const tambahBtn = document.getElementById('tambah');
  const kurangBtn = document.getElementById('kurang');
  const jumlahSpan = document.getElementById('jumlah');
  const totalHarga = document.getElementById('total-harga');
  const stokDisplay = document.getElementById('stok');

  // Variabel stok dan harga
  const stokMaks = 10;
  const hargaPerPcs = 3000;
  let jumlah = 0;

  // Tampilkan detail pesanan saat tombol beli ditekan
  tombolBeli.addEventListener('click', () => {
    detailPesanan.style.display = 'block';
  });

  // Update tampilan jumlah, total harga, dan stok
  function updateUI() {
    jumlahSpan.textContent = jumlah;
    totalHarga.textContent = Total: Rp ${(jumlah * hargaPerPcs).toLocaleString()};
    stokDisplay.textContent = Stok tersedia: ${stokMaks - jumlah};
  }

  // Event klik tombol tambah
  tambahBtn.addEventListener('click', () => {
    if (jumlah < stokMaks) {
      jumlah++;
      updateUI();
    } else {
      alert("Maaf, stok cireng sudah habis.");
      
    }
  });

  // Event klik tombol kurang
  kurangBtn.addEventListener('click', () => {
    if (jumlah > 0) {
      jumlah--;
      updateUI();
    }
  });

  // Jalankan update UI pertama kali
  updateUI();
