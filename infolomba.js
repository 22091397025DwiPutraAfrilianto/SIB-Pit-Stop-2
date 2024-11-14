function submitForm() {
    const nama = document.getElementById("nama").value;
    const ttl = document.getElementById("ttl").value;
    const asal = document.getElementById("asal").value;
    const alamat = document.getElementById("alamat").value;
    const nomor = document.getElementById("nomor").value;
    const email = document.getElementById("email").value;
    const jenis = document.getElementById("jenis").value;
    const foto = document.getElementById("foto").files[0];
  
    if (!nama || !ttl || !asal || !alamat || !nomor || !email || !jenis || !foto) {
      alert("Mohon lengkapi semua data.");
      return;
    }
  
    alert("Pendaftaran berhasil! Terima kasih telah mendaftar.");
    document.getElementById("registrationForm").reset();
  
    window.location.href = "payment.html";

}


  