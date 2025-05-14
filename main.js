function chooseRock() { 
    var computer = 10 * Math.random();
    if ((computer >= 0 && computer < 1) || (computer >= 3 && computer < 4) || (computer >= 6 && computer < 7)) {
        // computer choice = rock
        show("rock", "rock");
    } else if ((computer >= 1 && computer < 2) || (computer >= 4 && computer < 5) || (computer >= 7 && computer < 8)) {
        // computer choice = paper
        show("rock", "paper");
    } else if ((computer >= 2 && computer < 3) || (computer >= 5 && computer < 6) || (computer >= 8 && computer < 9)) {
        // computer choice = scissor
        show("rock", "scissor");
    } else {
        // computer choice = gun
        showGun();
    }
}

function choosePaper() { 
    var computer = 10 * Math.random();
    if ((computer >= 0 && computer < 1) || (computer >= 3 && computer < 4) || (computer >= 6 && computer < 7)) {
        // computer choice = rock
        show("paper", "rock");
    } else if ((computer >= 1 && computer < 2) || (computer >= 4 && computer < 5) || (computer >= 7 && computer < 8)) {
        // computer choice = paper
        show("paper", "paper");
    } else if ((computer >= 2 && computer < 3) || (computer >= 5 && computer < 6) || (computer >= 8 && computer < 9)) {
        // computer choice = scissor
        show("paper", "scissor");
    } else {
        // computer choice = gun
        showGun();
    }
}

function chooseScissor() { 
    var computer = 10 * Math.random();
    if ((computer >= 0 && computer < 1) || (computer >= 3 && computer < 4) || (computer >= 6 && computer < 7)) {
        // computer choice = rock
        show("scissor", "rock");
    } else if ((computer >= 1 && computer < 2) || (computer >= 4 && computer < 5) || (computer >= 7 && computer < 8)) {
        // computer choice = paper
        show("scissor", "paper");
    } else if ((computer >= 2 && computer < 3) || (computer >= 5 && computer < 6) || (computer >= 8 && computer < 9)) {
        // computer choice = scissor
        show("scissor", "scissor");
    } else {
        // computer choice = gun
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
    document.getElementById("rockBtn").disabled = true;
    document.getElementById("paperBtn").disabled = true;
    document.getElementById("scissorBtn").disabled = true;
    document.getElementById("gameResult").style.visibility = "visible";
    document.getElementById("closeBtn").style.visibility = "visible";
}

function showGun() {
    document.getElementById("resultText").textContent = "You DIE! The oppoenent chose gun.";
    document.getElementById("opponentImage").src = "./images/gun.svg";
    document.getElementById("rockBtn").disabled = true;
    document.getElementById("paperBtn").disabled = true;
    document.getElementById("scissorBtn").disabled = true;
    document.getElementById("gameResult").style.visibility = "visible";
    document.getElementById("closeBtn").style.visibility = "visible";
}

function closeWindow() {
    document.getElementById("closeBtn").style.visibility = "hidden";
    document.getElementById("gameResult").style.visibility = "hidden";
    document.getElementById("opponentImage").src = "./images/eye.svg";
    document.getElementById("rockBtn").disabled = false;
    document.getElementById("paperBtn").disabled = false;
    document.getElementById("scissorBtn").disabled = false;
}