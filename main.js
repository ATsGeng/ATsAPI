ES6 Module
import api from "https://cdn.jsdelivr.net/gh/crootjs/lib@0.0.3/api.js";

// Fungsi untuk inisialisasi pemanggilan API
export const initAPI = () => {
    const url = "https://api.github.com/orgs/atsgeng";
    const targetId = "app";

    console.log("Memulai pemanggilan API...");
    
    // Menggunakan fungsi get dari crootjs v0.0.3
    // Versi ini secara otomatis memasukkan hasil ke elemen dengan ID targetId
    api.get(url, targetId);
};

initAPI();
