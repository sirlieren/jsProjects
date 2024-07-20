const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
const sound = document.querySelector("#sound");

//Inputs
const inputBox = document.querySelector("#inpWord");
const btnSearch = document.querySelector("#btnWord");
const voiceOnBtn = document.querySelector("#voiceOnBtn");

//Outputs
const word = document.querySelector("#wordText");
const detail1 = document.querySelector("#detail1");
const detail2 = document.querySelector("#detail2");
const wordMeaing = document.querySelector(".wordMeaning");
const wordExample = document.querySelector(".wordExample");


btnSearch.addEventListener("click", search);
voiceOnBtn.addEventListener("click", playSound);
//voiceOnBtn.setAttribute("onclick", playSound());

function search() {
    let input = inputBox.value;
    let dataSend = url + input;
    fetch(dataSend)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            word.textContent = data[0].word;
            detail1.textContent = data[0].meanings[0].partOfSpeech;
            detail2.textContent = data[0].phonetic;
            wordMeaing.textContent = data[0].meanings[0].definitions[0].definition;
            wordExample.textContent = data[0].meanings[0].definitions[0].example || "";
            sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
        })
        .catch(() => {
            word.textContent = "Couldn't find the world.";
        })



}
function playSound() {
    sound.play();
    console.log("za");
}