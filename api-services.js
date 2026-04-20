import api from "https://cdn.jsdelivr.net/gh/crootjs/lib@0.0.3/api.js";

export const fetchOrgData = (orgName, targetId) => {
    const url = `https://api.github.com/orgs/${orgName}`;
    api.get(url, targetId);
};
