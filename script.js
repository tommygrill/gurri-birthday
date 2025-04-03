let clickCount = 0;

function intro(){
    document.getElementById("startText").style.display = "none";
    document.getElementById("info").style.display = "none";
    document.getElementById("intro").style.display = "block";
    document.body.style.backgroundImage = 'url("voucher-image.png")';
}

function showCake() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("zwei").style.display = "flex";
    document.getElementById("cake").style.display = "block";
    document.getElementById("blasen").style.display = "block";
    document.getElementById("blasen2").style.display = "block";
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = 'rgb(210, 219, 225)';
}

function blowOutCandle() {
    document.getElementById("cake").style.display = "none";
    document.getElementById("blasen").style.display = "none";
    document.getElementById("blasen2").style.display = "none";
    document.getElementById("zwei").style.display = "none";
    document.getElementById("drei").style.display = "flex";
    document.getElementById("cakeOut").style.display = "block";
    document.getElementById("after").style.display = "block";
    document.getElementById("after2").style.display = "block";
}

function showGift() {
    document.getElementById("drei").style.display = "none";
    document.getElementById("after").style.display = "none";
    document.getElementById("after2").style.display = "none";
    document.getElementById("cakeOut").style.display = "none";
    document.getElementById("gift").style.display = "block";
    document.getElementById("vier").style.display = "flex";
    document.getElementById("aus").style.display = "block";
    document.getElementById("aus2").style.display = "block";
}

function unwrapGift() {
    clickCount++;
    if (clickCount === 1) {
        document.getElementById("gift").style.display = "none";
        document.getElementById("vier").style.display = "none";
        document.getElementById("aus").style.display = "none";
        document.getElementById("aus2").style.display = "none";
        document.getElementById("gift1").style.display = "block";
        document.getElementById("five").style.display = "flex";
        document.getElementById("fast").style.display = "block";
        document.getElementById("fast2").style.display = "block";
    } else if (clickCount === 2) {
        document.getElementById("gift1").style.display = "none";
        document.getElementById("five").style.display = "none";
        document.getElementById("fast").style.display = "none";
        document.getElementById("fast2").style.display = "none";
        document.getElementById("six").style.display = "flex";
        document.getElementById("voucher").style.display = "block";
        document.body.style.backgroundImage = 'url("gift-open.png")';
        document.body.style.backgroundRepeat = 'repeat';
        startConfetti();
        setTimeout(showText, 1000);
    }
}

// Konfetti-Effekt
function startConfetti() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}

function getRandomColor() {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Verzögertes Einblenden des Textes
function showText() {
    document.querySelector("#voucher h2").style.opacity = "1";
    document.querySelector("#voucher p").style.opacity = "1";
}

