const village1 = document.querySelector('.village1');
const village2 = document.querySelector('.village2');
const village3 = document.querySelector('.village3');
const village4 = document.querySelector('.village4');
const village5 = document.querySelector('.village5');

const data = localStorage.getItem("rpg-game-data")
village1.innerHTML = data.location[0].name
village1.innerHTML = data.location[1].name
village1.innerHTML = data.location[2].name
village1.innerHTML = data.location[3].name
village1.innerHTML = data.location[4].name

village1.addEventListener('click', (e) => {
  localStorage.setItem ("village-picked",data.location[0]) 
  location.href = './village.html';
});
village2.addEventListener('click', (e) => {
  localStorage.setItem ("village-picked",data.location[1])
  location.href = './village.html';

});
village3.addEventListener('click', (e) => {
  localStorage.setItem ("village-picked",data.location[2])
  location.href = './village.html';

});
village4.addEventListener('click', (e) => {
  localStorage.setItem ("village-picked",data.location[3])
  location.href = './village.html';

});
village5.addEventListener('click', (e) => {
  localStorage.setItem ("village-picked",data.location[4])
  location.href = './village.html';

});