import Lottery from "./modules/lottery.js";
import { politicians, folk } from "./data/data.js";

const buttonStartLottery = document.querySelector(".button-start-lottery");
const lotteryResultsEl = document.querySelector(".lottery-results");
const winningCombinationEl = document.querySelector(".winning-combination");
const winningMessageEl = document.querySelector(".winners-message");
const winnersEl = document.querySelector(".winners");

const lottery = new Lottery(folk);

buttonStartLottery.addEventListener("click", () => {
  buttonStartLottery.disabled = true;
  buttonStartLottery.innerHTML = "Lottery drawing in progress...";
  lotteryResultsEl.getElementsByClassName.display = "none";

  lottery
    .startDrawing()
    .then((result) => {
      winningCombinationEl.innerHTML = `Winning combination was: ${result.winningCombination}`;
      winningMessageEl.innerHTML = "Winners:";

      let winnersList = "";
      result.winners.forEach(
        (player) => (winnersList += `<li>${player.getPlayerDetails()}</li>`)
      );
      winnersEl.innerHTML = winnersList;
    })
    .catch((result) => {
      winningCombinationEl.innerHTML = `Winning combination was: ${result.winningCombination}`;
      winningMessageEl.innerHTML = "There are no winners";
    })
    .finally(() => {
      buttonStartLottery.disabled = false;
      buttonStartLottery.innerHTML = "Start lottery drawing";
      lotteryResultsEl.getElementsByClassName.display = "block";
    });
});
