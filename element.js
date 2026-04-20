// element.js

// Fungsi untuk mengatur konten di dalam elemen berdasarkan ID
export const setInner = (id, content) => {
    const element = document.getElementById(id);
    if (element) {
        element.innerHTML = content;
    }
};

// Fungsi untuk memberikan gaya khusus (opsional)
export const setGreenStyle = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.style.borderColor = "#22c55e";
        element.style.color = "#14532d";
    }
};
