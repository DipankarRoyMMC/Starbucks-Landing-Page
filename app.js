const starBucks = document.querySelector('.starbucks');
const thumb1 = document.querySelector('.thumb1').addEventListener('click', thumbOneChange);
const thumb2 = document.querySelector('.thumb2').addEventListener('click', thumbTwoChange);
const thumb3 = document.querySelector('.thumb3').addEventListener('click', thumbThreeChange);

const circle = document.querySelector('.circle');

function thumbOneChange(){
    starBucks.src='img/img2.png';
    circle.style.backgroundColor = '#017431';

}
function thumbTwoChange(){
    starBucks.src='img/img2.png';
    circle.style.backgroundColor = '#eb7495';
}

function thumbThreeChange(){
    starBucks.src= 'img/img3.png';
    circle.style.backgroundColor = '#d752b1';
}