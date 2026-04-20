// api-service.js
import * as croot from "https://cdn.jsdelivr.net/gh/crootjs/lib@0.0.3/api.js";

export const fetchOrgData = (orgName, targetId) => {
    const url = `https://api.github.com/orgs/${orgName}`;
    
    // croot.get secara otomatis akan merender hasil JSON ke targetId
    croot.get(url, targetId);
};
