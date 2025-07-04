// JavaScript for QR Code Generator

let imgbox = document.getElementById("imgbox");
let qrimage = document.getElementById("qrimage");
let qrtext = document.getElementById("qrtext");

function generateqr() {
    if (qrtext.value.length > 0) {
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrtext.value);
        imgbox.classList.add("show-img");
    } else {
        qrtext.classList.add('error');
        setTimeout(() => {
            qrtext.classList.remove('error');
        }, 1000);
    }
}
