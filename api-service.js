// api-service.js
// Menggunakan * as croot karena library tidak punya default export
import * as croot from "https://cdn.jsdelivr.net/gh/crootjs/lib@0.0.3/api.js";

export const fetchOrgData = (orgName, targetId) => {
    const url = `https://api.github.com/orgs/${orgName}`;
    
    // Di library v0.0.3, fungsi get dipanggil dari objek hasil import
    // Parameter: (URL, ID_Target)
    croot.get(url, targetId);
};
