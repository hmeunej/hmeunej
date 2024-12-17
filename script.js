// Simulasi login
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validasi sederhana
    if (username === "user1" && password === "password1") {
        window.location.href = "voting.html";
    } else {
        document.getElementById("errorMessage").innerText = "Login gagal. Cek kembali data Anda.";
    }
});

// Kirim suara ke Google Apps Script
document.getElementById("voteForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const candidate = document.querySelector('input[name="candidate"]:checked').value;

    fetch("URL_APPS_SCRIPT_SIMPAN_VOTE", {
        method: "POST",
        body: JSON.stringify({ candidate: candidate }),
    }).then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            document.getElementById("successMessage").innerText = "Suara Anda berhasil terkirim!";
        } else {
            alert("Terjadi kesalahan. Coba lagi.");
        }
    });
});
