let slideIndex = 1;
showSlides(slideIndex);





// function storePage(){
//   location.href=`./store.html`
// }


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
const hp1 = 50;
const hp2 = 30;
const hp3 = 70;

const gold1 = 2;
const gold2 = 1;
const gold3 = 5;

const btnPotion1 = document.querySelector('.btn-potion1');
const btnPotion2 = document.querySelector('.btn-potion2');
const btnPotion3 = document.querySelector('.btn-potion3');

const data = JSON.parse(localStorage.getItem('rpg-game-data'));

btnPotion1.addEventListener('click', (e) => {
  if (Number(data.player.gold) >= gold1) {
    data.player.gold = Number(data.player.gold) - gold1;
    data.player.health = Number(data.player.hp) + hp1;
    localStorage.setItem('rpg-game-data', JSON.stringify(data));
  }else{
    alert('NOY ENOUGH GOLD');
  }
});
btnPotion2.addEventListener('click', (e) => {
  if (Number(data.player.gold) >= gold2) {
    data.player.gold = Number(data.player.gold) - gold2;
    data.player.health = Number(data.player.hp) + hp2;
    localStorage.setItem('rpg-game-data', JSON.stringify(data));
  }else{
    alert('NOY ENOUGH GOLD');
  }
});
btnPotion3.addEventListener('click', (e) => {
  if (Number(data.player.gold) >= gold3) {
    data.player.gold = Number(data.player.gold) - gold3;
    data.player.health = Number(data.player.hp) + hp3;
    localStorage.setItem('rpg-game-data', JSON.stringify(data));

  }else{
    alert('NOY ENOUGH GOLD');
  }
});


const btnBack = document.querySelector('.btn-back');
btnBack.addEventListener('click', (e) => {
  location.href = './village.html';
});