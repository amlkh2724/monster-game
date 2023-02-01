const attackButton = document.getElementById("attack-button");
const runButton = document.getElementById("run-button");
const startFightButton = document.getElementById("start-fight-button");

startFightButton.addEventListener("click" , ()=> {
    // for now there is only one player and one monster
    startFight(player , monster1);
})