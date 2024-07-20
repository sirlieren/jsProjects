

const url="https://pokeapi.co/api/v2/pokemon/";
const card=document.querySelector("#card");
const btn=document.getElementById("btn");

const typeColor = {
    bug: "#26de81",
    dragon: "#ffea7a",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF"
};

//Getting datas of card
let getPokeData=()=>{
    //Get Random ID between 1-150
    let id=Math.floor(Math.random()*150)+1;
    let finalURL=url+id; //url olusturduk
    fetch(finalURL) //fetch ile ulastık
        .then((response)=>response.json())
        .then((data)=>{//Creating Card
            generateCard(data);
        });
};

//CardGENERATION

let generateCard=(data)=>{
    console.log(data);
    const hp=data.stats[0].base_stat;
    const attack=data.stats[1].base_stat;
    const defense=data.stats[2].base_stat;
    const speed=data.stats[5].base_stat;

    const imgSrc=data.sprites.other.dream_world.front_default;
    const pokeName=data.name.toUpperCase();

    //Set card Color
    const cardColor=typeColor[data.types[0].type.name]



    card.innerHTML=`
     <p class="hp"> 
                <span>HP</span>
                ${hp}
            </p>
            <img src="${imgSrc}">
            <h2 class="char-name">${pokeName}</h2>
            <div class="types">
                
            </div>

            <div class="stats">
                <div>
                    <h3>${attack}</h3>
                    <p>Attack</p>
                </div>
                <div>
                    <h3>${defense}</h3>
                    <p>Defense</p>
                </div>
                <div>
                    <h3>${speed}</h3>
                    <p>Speed</p>
                </div>
                
            </div>
    `;
    appendTypes(data.types);
    styleCard(cardColor);
}



let appendTypes=(types)=>{
    types.forEach((item)=>{
        let span=document.createElement("SPAN");
        span.textContent=item.type.name;
        span.textContent=span.textContent.charAt(0).toUpperCase()+span.textContent.slice(1);
        console.log(span);
        document.querySelector(".types").appendChild(span);   
    })

}

let styleCard=(color)=>{
    const characterInfoBox=document.querySelector(".char-name");
    card.style.background=`radial-gradient(
        circle at 50% 0%, ${color} 25%,whitesmoke 35%
    )`;
    card.style.boxShadow=` 0 5px 55px ${color}`;
    characterInfoBox.style.background=color;

    card.querySelectorAll(".types span").forEach((typeColor)=>{
        typeColor.style.backgroundColor=color;
        typeColor.style.boxShadow=`0 5px 10px ${color}`;
        
    });
    
}


btn.addEventListener("click",getPokeData);
window.addEventListener("load",getPokeData); //Create first card onload.

