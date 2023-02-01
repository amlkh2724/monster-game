const attackButton = document.getElementById("attack-button");
const runButton = document.getElementById("run-button");
const startFightButton = document.getElementById("start-fight-button");
const monsterHealth = document.getElementById("monster-health-label");
const playerHealth = document.getElementById("player-health-label");



function updateScreenStats(player , monster) {
    monsterHealth.innerText = monster.health;
    playerHealth.innerText = player.health;
}