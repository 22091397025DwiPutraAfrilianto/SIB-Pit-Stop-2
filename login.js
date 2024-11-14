// login.js

// Fungsi untuk mengarahkan ke halaman beranda saat login berhasil
document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah form submit secara default
    window.location.href = 'homepage.html'; // Arahkan ke halaman beranda
});

// Fungsi untuk mengarahkan ke halaman signup saat tombol "Sign Up" diklik
document.querySelector('.signup-button').addEventListener('click', function() {
    window.location.href = 'signup.html'; // Arahkan ke halaman signup
});
