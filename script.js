document.addEventListener("DOMContentLoaded", () => {
    const quotetext = document.querySelector(".Quote");
    const authorname = document.querySelector(".Author .name");
    const quotebtn = document.querySelector("button");
    const soundbtn = document.querySelector(".voice");
    const samebtn = document.querySelector(".copy");
    

    function randomequote() {
        quotebtn.innerHTML = "Loading Quote...";
        fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
            console.log(result);
            quotetext.innerHTML = result.content;
            authorname.innerHTML = result.author;
            quotebtn.innerHTML = "New Quote";
        });
    }
    let voices = [];
    function loadVoices() {
        voices = speechSynthesis.getVoices();
        console.log(voices);
    }
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
    }
    soundbtn.addEventListener("click", ()=>{
        const femaleVoice = voices.find(voice => voice.name === "Google italiano Female" || voice.name.includes("Female") || voice.gender === "female");

        let utterance = new SpeechSynthesisUtterance(`${quotetext.innerHTML} by ${authorname.innerHTML}`);
        if (femaleVoice) {
            utterance.voice = femaleVoice;
        } else {
            console.warn("Female voice not found. Using default voice.");
        }

        speechSynthesis.speak(utterance);
    });

    samebtn.addEventListener("click", ()=>{
        navigator.clipboard.writeText(quotetext.innerHTML);
    });


    quotebtn.addEventListener("click", randomequote);

});
