const words = ["F R I D A Y", "AI","J A R V I S"];
let currentIndex = 0;

function changeText() {
    const changingText = document.getElementById('changingText');
    changingText.innerText = "" + words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;
}

// Change the text every 2 seconds (2000 milliseconds)
setInterval(changeText, 1000);
