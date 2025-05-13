function chooseRock() { 
    var computerChoice;
    var computer = 10 * Math.random();
    if (computer < 3) {
        // computerChoice = "rock";
        show("rock", "rock");
    } else if (computer < 6) {
        // computerChoice = "paper";
        show("rock", "paper");
    } else if (computer < 9) {
        // computerChoice = "scissor";
        show("rock", "scissor");
    } else {
        // computerChoice = "gun";
        showGun();
    }
}

function choosePaper() { 
    var computerChoice;
    var computer = 10 * Math.random();
    if (computer < 3) {
        // computerChoice = "rock";
        show("paper", "rock");
    } else if (computer < 6) {
        // computerChoice = "paper";
        show("paper", "paper");
    } else if (computer < 9) {
        // computerChoice = "scissor";
        show("paper", "scissor");
    } else {
        // computerChoice = "gun";
        showGun();
    }
}

function chooseScissor() { 
    var computerChoice;
    var computer = 10 * Math.random();
    if (computer < 3) {
        // computerChoice = "rock";
        show("scissor", "rock");
    } else if (computer < 6) {
        // computerChoice = "paper";
        show("scissor", "paper");
    } else if (computer < 9) {
        // computerChoice = "scissor";
        show("scissor", "scissor");
    } else {
        // computerChoice = "gun";
        showGun();
    }
}

function show(player, computer) {
    var result;

    if (player === "rock") {
        if (computer === "rock") {
            result = "tie";
        } else if (computer === "paper") {
            result = "lose";
        } else {
            result = "win";
        }
    } else if (player === "paper") {
        if (computer === "rock") {
            result = "win";
        } else if (computer === "paper") {
            result = "tie";
        } else {
            result = "lose";
        }
    } else {
        if (computer === "rock") {
            result = "lose";
        } else if (computer === "paper") {
            result = "win";
        } else {
            result = "tie";
        }
    }
    
    document.getElementById("resultText").textContent = "You " + result + "! The oppoenent chose " + computer + ".";
    document.getElementById("opponentImage").src = "./images/" + computer + ".svg";
    document.getElementById("gameResult").style.visibility = "visible";
    document.getElementById("rockBtn").disabled = true;
    document.getElementById("paperBtn").disabled = true;
    document.getElementById("scissorBtn").disabled = true;
}

function showGun() {
    document.getElementById("resultText").textContent = "You lose! The oppoenent chose gun.";
    document.getElementById("opponentImage").src = "./images/gun.svg";
    document.getElementById("gameResult").style.visibility = "visible";
    document.getElementById("rockBtn").disabled = true;
    document.getElementById("paperBtn").disabled = true;
    document.getElementById("scissorBtn").disabled = true;
}

function closeWindow() {
    document.getElementById("gameResult").style.visibility = "hidden";
    document.getElementById("opponentImage").src = "./images/eye.svg";
    document.getElementById("rockBtn").disabled = false;
    document.getElementById("paperBtn").disabled = false;
    document.getElementById("scissorBtn").disabled = false;
}