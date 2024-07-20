const celcValue = document.getElementById("degreeCel");
const fahrValue = document.getElementById("degreeFahr");
const convertBtn = document.getElementById("convertBtn");
const emptyValue = "";
//convertBtn.addEventListener("click", convert);
celcValue.addEventListener("input", convert);

function convert() {

    if (celcValue.value != "" || celcValue.value != null) {
        //celc To fahr
        let newValue = (celcValue.value * 9 / 5) + 32;
        fahrValue.value = newValue;
        console.log(newValue);
    }
    else {
        fahrValue.value = emptyValue;
    }



}