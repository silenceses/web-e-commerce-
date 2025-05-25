const buttons = document.querySelectorAll('.beli');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const namaProduk = button.getAttribute('data-nama');
        const hargaProduk = button.getAttribute('data-harga');
        const nomorWhatsApp = '+6283185789344';
        const teks = `Halo, saya ingin membeli ${namaProduk} dengan harga ${hargaProduk}.`;
        const url = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(teks)}`;
        window.open(url, '_blank');
    });
});