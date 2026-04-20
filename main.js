// main.js
import { fetchOrgData } from './api-service.js';
import { setInner, setGreenStyle } from './element.js';

const init = () => {
    const ORGANISASI = "atsgeng";
    const ELEMENT_ID = "app";

    // Gunakan fungsi dari element.js untuk memberi info awal
    setInner(ELEMENT_ID, "<i>Memulai koneksi ke sistem ATsGeng...</i>");
    setGreenStyle(ELEMENT_ID);

    // Panggil API
    fetchOrgData(ORGANISASI, ELEMENT_ID);
};

document.addEventListener('DOMContentLoaded', init);
