let userScore = 0;
let compScore = 0;
let totalClicks = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

const drawGame = () => {
    // console.log("Game was draw.")
    msg.innerText = "Game was Draw. Play again"
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You win!");
        msg.innerText = `You win!  Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You lose");
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

//alert box
const closeModal = () => {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modal-overlay').style.display = 'none';
};
//alert box
const showModal = (text) => {
    document.getElementById('modal-text').innerText = text;
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-overlay').style.display = 'block';
};

const checkWinner = () => {
    if (userScore === 5) {
        showModal("Congratulations! You win the game!");
        // resetGame();
    } else if (compScore === 5) {
        showModal("Oops! Computer wins the game. Try again!");
        // resetGame();
    }
};

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    totalClicks = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
};

const playGame = (userChoice) => {
    // console.log(`User Choics = ${userChoice}`);
    const compChoice = genCompChoice();
    // console.log(`Computer Choics = ${compChoice}`);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
        totalClicks++;
        checkWinner();
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

document.getElementById('modal').querySelector('button').addEventListener("click", () => {
    window.location.reload();
});

