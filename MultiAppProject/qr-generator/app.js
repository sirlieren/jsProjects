const url = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
let input = "";

const inputBox = document.querySelector(".inputBox");
const createBtn = document.querySelector(".createBtn");

const qrImage = document.querySelector("#qrImage");



createBtn.addEventListener("click", createQR);

function createQR() {
    if (inputBox.value != "") {
        input = inputBox.value;
        let newUrl = url + input;
        qrImage.src = newUrl;
    }
    else {
        qrImage.src = "./error.svg";
    }

}
document.getElementById('downloadBtn').addEventListener('click', function () {
    const image = document.getElementById('qrImage');
    const link = document.createElement('a');

    link.href = image.src;
    link.download = 'indirme.jpg';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click(); // Linke tıkla
    document.body.removeChild(link);
});

