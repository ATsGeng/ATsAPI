// main.js
import { fetchOrgData } from './api-service.js';
import { renderingData } from './element.js';

const init = () => {
    const ORGANISASI = "atsgeng";
    const TARGET_ID = "app"; // Pastikan di index.html ID-nya adalah 'app'

    // Memberikan pesan loading yang selaras dengan tema hijau
    renderingData(TARGET_ID, "<i style='color: #4ade80;'>Menghubungkan ke sistem ATsGeng...</i>");

    // Ambil data dari API
    fetchOrgData(ORGANISASI, TARGET_ID);
};

// Tunggu DOM selesai dimuat
document.addEventListener('DOMContentLoaded', init);
