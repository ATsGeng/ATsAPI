// main.js
import { fetchOrgData } from './api-service.js';
import { renderingData } from './element.js';

const init = () => {
    const ORGANISASI = "atsgeng";
    const TARGET_ID = "app";

    // Gunakan fungsi dari element.js untuk pesan awal
    renderingData(TARGET_ID, "<i>Sistem sedang memuat data sekolah...</i>");

    // Jalankan pengambilan data API
    fetchOrgData(ORGANISASI, TARGET_ID);
};

// Jalankan saat halaman siap
document.addEventListener('DOMContentLoaded', init);
