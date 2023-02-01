const villageName = document.querySelector(".village-name");
const monster1 = document.querySelector(".monsters1");
const monster2 = document.querySelector(".monsters2");
const monster3 = document.querySelector(".monsters3");
const data = JSON.parse(localStorage.getItem("rpg-game-data"));

const villagePicked = localStorage.getItem("village-picked");
const village = data.locations[villagePicked];

villageName.innerText += village.name;

monster1.innerHTML = `<div>${village.monsters[0].name}</div><div>${village.monsters[0].gold}</div><button  class="choose-monster-button glow">Choose</button>`;
monster2.innerHTML = `<div>${village.monsters[1].name}</div><div>${village.monsters[1].gold}</div><button class="choose-monster-button glow">Choose</button>`;
monster3.innerHTML = `<div>${village.monsters[2].name}</div><div>${village.monsters[2].gold}</div><button class="choose-monster-button glow">Choose</button>`;

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

