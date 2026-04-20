// api-service.js
import * as croot from "https://cdn.jsdelivr.net/gh/crootjs/lib@0.0.3/api.js";

const BASE_URL = "https://api.github.com/orgs/atsgeng";

// Fungsi untuk mengambil data profil organisasi
export const fetchOrgData = (targetId) => {
    croot.get(BASE_URL, targetId);
};

// Fungsi BARU: Mengambil daftar repositori
export const fetchRepos = (targetId, callback) => {
    const url = `${BASE_URL}/repos`;
    // Kita gunakan callback agar data bisa kita modifikasi tampilannya
    croot.get(url, targetId, callback);
};
