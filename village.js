const village = document.querySelector(".village-name")
const monster1 = document.querySelector(".monsters1")
const monster2 = document.querySelector(".monsters2")
const monster3 = document.querySelector(".monsters3")
const monster4 = document.querySelector(".monsters4")
const monster5 = document.querySelector(".monsters5")

const data = localStorage.getItem("rpg-game-data")

const villagePicked = localStorage.getItem("village-picked")

village.innerHTML = villagePicked

monster1.innerHTML = `monster:${data.monsters[0]},gold:${data.monsters[0].gold}`
monster2.innerHTML = `monster:${data.monsters[1]},gold:${data.monsters[1].gold}`
monster3.innerHTML = `monster:${data.monsters[2]},gold:${data.monsters[2].gold}`
monster4.innerHTML = `monster:${data.monsters[3]},gold:${data.monsters[3].gold}`
monster5.innerHTML = `monster:${data.monsters[4]},gold:${data.monsters[4].gold}`

monster1.addEventListener("click", function () {
    localStorage.setItem("monsterName", data.monsters[0])
    location.href = './index.html';
})

monster2.addEventListener("click", function () {
    localStorage.setItem("monsterName", data.monsters[1])

    location.href = './index.html';
})

monster3.addEventListener("click", function () {
    localStorage.setItem("monsterName", data.monsters[2])

    location.href = './index.html';
})

monster4.addEventListener("click", function () {
    localStorage.setItem("monsterName", data.monsters[3])

    location.href = './index.html';
})

monster5.addEventListener("click", function () {
    localStorage.setItem("monsterName", data.monsters[4])

    location.href = './index.html';
})