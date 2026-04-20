// main.js
import { fetchOrgData } from './api-service.js';
import { setInner } from './element.js';

const init = () => {
    setInner("app", "<i>Menghubungkan ke server ATsGeng...</i>");
    fetchOrgData("atsgeng", "app");
};

document.addEventListener('DOMContentLoaded', init);
