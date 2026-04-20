// element.js
import { setInner, getValue } from "https://cdn.jsdelivr.net/gh/crootjs/lib@0.0.3/element.js";

// Kita ekspor kembali agar bisa dipakai di main.js
export { setInner, getValue };

// Tambahkan fungsi custom jika ingin memanipulasi gaya
export const renderingData = (id, content) => {
    setInner(id, content);
};
