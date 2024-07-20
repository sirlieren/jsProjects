const passwordInput = document.getElementById("inputPassword");
const generateBtn = document.querySelector(".generateBtn");
const copyBtn = document.querySelector(".copyBtn");


let passwordSize = 12;

const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuopasdfghjklizxcvbnm";
const number = "1234567890";
const symbol = "!'^+%&/()=?_>£#$½";

function createPassword() {
    let password = "";
    let numero = 0;
    while (passwordSize > password.length) {
        numero = Math.floor(Math.random() * 4.2);
        switch (numero) {
            case 1:
                password += upperCase[Math.floor(Math.random() * upperCase.length)];
                break;
            case 2:
                password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
                break;
            case 3:
                password += number[Math.floor(Math.random() * number.length)];
                break;
            case 4:
                password += symbol[Math.floor(Math.random() * symbol.length)];
                break;
        }


    }
    console.log(password);
    passwordInput.value = password;
}

function copyThePassword() {
    passwordInput.select();
    document.execCommand("copy");
}

generateBtn.addEventListener("click", createPassword);
copyBtn.addEventListener("click", copyThePassword);