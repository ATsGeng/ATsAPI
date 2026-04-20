// api-service.js
import * as croot from "https://cdn.jsdelivr.net/gh/crootjs/lib@0.0.3/api.js";

export const getOrgData = (targetId) => {
    const url = "https://api.github.com/orgs/atsgeng";
    // Fungsi get dari crootjs akan langsung merender JSON ke targetId
    croot.get(url, targetId);
};
