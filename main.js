// main.js
import { getOrgData } from './api-service.js';
import { setInner } from './element.js';

const init = () => {
    const TARGET = "app";
    
    // Beri teks loading sebelum data muncul
    setInner(TARGET, "<i>Menghubungkan ke ATsGeng System...</i>");
    
    // Jalankan pengambilan data
    getOrgData(TARGET);
};

document.addEventListener('DOMContentLoaded', init);
