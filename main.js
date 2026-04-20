// main.js
import { fetchRepos } from './api-service.js';
import { setInner } from './element.js';

const init = () => {
    const TARGET_ID = "app";

    // Panggil fungsi getRepos dengan callback untuk mempercantik tampilan
    fetchRepos(TARGET_ID, (response) => {
        if (response.error) {
            setInner(TARGET_ID, `<p style="color:red">Gagal memuat data: ${response.error}</p>`);
            return;
        }

        // Mapping data JSON menjadi elemen HTML (Daftar Repositori)
        const repoList = response.map(repo => `
            <div style="border-bottom: 1px solid #1e293b; padding: 10px 0;">
                <strong style="color: #4ade80;">> ${repo.name}</strong><br>
                <small style="color: #94a3b8;">${repo.description || 'Tidak ada deskripsi'}</small><br>
                <a href="${repo.html_url}" target="_blank" style="color: #109335; font-size: 12px;">Buka Link GitHub</a>
            </div>
        `).join('');

        setInner(TARGET_ID, repoList);
    });
};

document.addEventListener('DOMContentLoaded', init);
