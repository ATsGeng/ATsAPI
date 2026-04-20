// element.js
import { setInner } from "https://cdn.jsdelivr.net/gh/crootjs/lib@0.0.3/element.js";

// Fungsi pembungkus untuk memudahkan pemanggilan
export const renderingData = (id, content) => {
    setInner(id, content);
};

export { setInner };
