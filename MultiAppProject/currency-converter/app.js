let api=`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const fromDropdown=document.getElementById("from-currency-select");
const toDropdown=document.getElementById("to-currency-select");

const resultText=document.getElementById("result");

const convertBtn=document.getElementById("convertButton");

currencyCodes.forEach((currency)=>{
    const option=document.createElement("option");
    option.value=currency;
    option.text=currency;
    fromDropdown.add(option);
}); 

currencyCodes.forEach((currency)=>{
    const option=document.createElement("option");
    option.value=currency;
    option.text=currency;
    toDropdown.add(option);
});  

//SETTING DEFAULT VALUES

fromDropdown.value="TRY";
toDropdown.value="USD";
amount.value=1;
resultText.textContent="Welcome to Online Currency Converter"
resultText.style.fontSize="1.1em";



//Code of convert
function convertCurrency(){
    const amount=document.getElementById("amount").value;
    const fromCurrency=fromDropdown.value;
    const toCurrency=toDropdown.value;
    const amountValue=amount.value;
    resultText.style.fontSize="1.3em";

    if(amount>0&&amount!=null){
        fetch(api)
            .then((respone)=> respone.json())
            .then((data)=>{
                let fromExchangeRate=data.conversion_rates[fromCurrency];
                let toExchangeRate=data.conversion_rates[toCurrency];

                const convertedAmount=(amount/fromExchangeRate)*toExchangeRate;

                resultText.innerHTML=`${amount} ${fromCurrency}=${convertedAmount.toFixed(2)} ${toCurrency}`;           });
    }
    else{
        resultText.textContent="Please enter a valid value.";
    }
}
convertBtn.addEventListener("click",convertCurrency);
//window.addEventListener("load",convertCurrency);

