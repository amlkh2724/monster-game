const villageName = document.querySelector(".village-name");
const monster1 = document.querySelector(".monsters1");
const monster2 = document.querySelector(".monsters2");
const monster3 = document.querySelector(".monsters3");
const data = JSON.parse(localStorage.getItem("rpg-game-data"));

const villagePicked = localStorage.getItem("village-picked");
const village = data.locations[villagePicked];

villageName.innerText += village.name;

monster1.innerHTML = `<div>${village.monsters[0].name}</div><div>${village.monsters[0].gold}</div><button  class="btn-monster1 choose-monster-button glow">Choose</button>`;
monster2.innerHTML = `<div>${village.monsters[1].name}</div><div>${village.monsters[1].gold}</div><button class="btn-monster2 choose-monster-button glow">Choose</button>`;
monster3.innerHTML = `<div>${village.monsters[2].name}</div><div>${village.monsters[2].gold}</div><button class="btn-monster3 choose-monster-button glow">Choose</button>`;

const btnMonster1 = document.querySelector(".btn-monster1");
const btnMonster2 = document.querySelector(".btn-monster2");
const btnMonster3 = document.querySelector(".btn-monster3");

const chooseMonsterButtons = document.querySelectorAll(".choose-monster-button");

for (let i = 0; i < chooseMonsterButtons.length; i++) {
    chooseMonsterButtons[i].addEventListener("click", function () {
        handleMonsterClick(i);
    });
}

function handleMonsterClick(index) {
    console.log("Monster chosen:", village.monsters[index].name);
    localStorage.setItem("monsterName", index);
    location.href = './index.html';
}

function getWinner() {
    const winner = localStorage.getItem("winner").split(' ');
    if (winner.length === 1) {
        if (winner[0] === village.monsters[0].name) {
            monster1.classList.add('opacity');
            monster1.classList.remove('glow');
            btnMonster1.disabled = true;
        }else if (winner[0] === village.monsters[1].name) {
            monster2.classList.add('opacity');
            monster2.classList.remove('glow');
            btnMonster2.disabled = true;
        }else if (winner[0] === village.monsters[2].name) {
            monster3.classList.add('opacity');
            monster3.classList.remove('glow');
            btnMonster3.disabled = true;
        }
    }else{
        const winner = localStorage.getItem("winner").split(",");
        if (winner.length === 2) {
            for (let monster of winner) {
                if (monster === village.monsters[0].name) {
                    monster1.classList.add('opacity');
                    monster1.classList.remove('glow');
                    btnMonster1.disabled = true;
                }else if (monster === village.monsters[1].name) {
                    monster2.classList.add('opacity');
                    monster2.classList.remove('glow');
                    btnMonster2.disabled = true;
                }else if (monster === village.monsters[2].name) {
                    monster3.classList.add('opacity');
                    monster3.classList.remove('glow');
                    btnMonster3.disabled = true;
                }
            }  
        }
    }  
}

getWinner();