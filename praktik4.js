let produk = {
  namaProduk: "Mouse Wireless",
  harga: 150000,
  stok: 3,
  diskon: 0.10,

  hargaDiskon: function() {
    let hargaAkhir = this.harga - (this.harga * this.diskon);
    return hargaAkhir;
  },

  // Method untuk mengurangi stok saat produk dibeli
  beliProduk: function(jumlah) {
    if (this.stok <= 0) {
      console.log("Maaf, stok produk sudah habis!");
    } else if (jumlah > this.stok) {
      console.log(`Stok tidak mencukupi! Hanya tersisa ${this.stok} item.`);
    } else {
      this.stok -= jumlah;
      console.log(`Pembelian berhasil! Anda membeli ${jumlah} ${this.namaProduk}.`);
      console.log(`Sisa stok sekarang: ${this.stok}`);
      
      if (this.stok === 0) {
          console.log("Stok produk kini habis, segera restock!");
      }
    }
    
    console.log("----------------------------------------");
  }
};

console.log(`${produk.namaProduk}`);
console.log(`Harga: Rp${produk.harga}`);
console.log(`Stok tersedia: ${produk.stok}`);
console.log("----------------------------------------");
console.log(`Harga setelah diskon: Rp${produk.hargaDiskon()}`);
console.log("----------------------------------------");

produk.beliProduk(1);
produk.beliProduk(2);

produk.beliProduk(1);
