const villageName = document.querySelector(".village-name")
const monster1 = document.querySelector(".monsters1")
const monster2 = document.querySelector(".monsters2")
const monster3 = document.querySelector(".monsters3")
const monster4 = document.querySelector(".monsters4")
const monster5 = document.querySelector(".monsters5")

const data =JSON.parse(localStorage.getItem("rpg-game-data"))

const villagePicked = localStorage.getItem("village-picked")

const village=data.locations[villagePicked]

villageName.innerHTML = village.name

monster1.innerHTML = `${village.monsters[0].name},${village.monsters[0].gold}`
monster2.innerHTML = `${village.monsters[1].name},${village.monsters[1].gold}`
monster3.innerHTML = `${village.monsters[2].name},${village.monsters[2].gold}`
// monster4.innerHTML = `monster:${village.monsters[3].name},gold:${village.monsters[3].gold}`
// monster5.innerHTML = `monster:${village.monsters[4].name},gold:${village.monsters[4].gold}`

monster1.addEventListener("click", function () {
    localStorage.setItem("monsterName", 0)
    location.href = './index.html';
})

monster2.addEventListener("click", function () {
    localStorage.setItem("monsterName", 1)

    location.href = './index.html';
})

monster3.addEventListener("click", function () {
    localStorage.setItem("monsterName", 2)

    location.href = './index.html';
})

// monster4.addEventListener("click", function () {
//     localStorage.setItem("monsterName", village.monsters[3])

//     location.href = './index.html';
// })

// monster5.addEventListener("click", function () {
//     localStorage.setItem("monsterName", data.monsters[4])

//     location.href = './index.html';
// })