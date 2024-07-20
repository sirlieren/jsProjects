let searchBtn=document.getElementById("search-btn");
let countryInp=document.getElementById("country-inp")



searchBtn.addEventListener("click",()=>{
    let countryName=countryInp.value;
    let finalURL=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    
    fetch(finalURL)
        .then((response)=> response.json())
        .then((data) => {
        console.log(data[0]);//Tüm data
        console.log(data[0].name.common); //Ülkenin İsmi
        console.log(data[0].capital[0]);//Başkent
        console.log(data[0].population);//Nufüs
        console.log(data[0].region);//Bölge
        console.log(Object.values(data[0].languages).toString().split(",").join(", "));//Dil
        console.log(data[0].flags.svg);//Bayrak
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(data[0].name.official);
        result.innerHTML=`
        <img src="${data[0].flags.svg}"class="flag-img">
        <h2 >${data[0].name.common.toUpperCase()}</h2>

        <div class="wrapper">
            <div class="data-wrapper">
                <div> 
                 <h4>CAPITAL</h4>
                     <span> ${data[0].capital[0]}</span>
                </div>
                <div>
                 <h4>REGION</h4>
                     <span> ${data[0].region}</span>
                </div>
                <div>
                    <h4>POPULATION</h4>
                        <span>${data[0].population}</span>
                </div>
            </div> 
            <div class="data-wrapper">
                <div> 
                 <h4>LANGUAGES</h4>
                     <span> ${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
                </div>

                <div> 
                 <h4>CURRENCIES</h4>
                     <span> ${(Object.keys(data[0].currencies)[0])+"-"+(data[0].currencies[Object.keys(data[0].currencies)].name)   }</span>
                </div>
            </div>
        </div>
        `;
        }).catch(()=>{
            if(countryName.length==0){
                result.innerHTML=`
                <h3>
                    The input field cannot be empty.                
                </h3>
                `
            }
            else{
                result.innerHTML=`
                <h3>
                    Please enter a valid country.       
                </h3>
                `
            }
        })


});