"use strict";

// Icon Slide Show
const icons = document.querySelectorAll(".headIcin i");
let countIcon = 1;

console.log(icons, typeof icons);

setInterval(function(){
  countIcon++;
  const icon = document.querySelector(".headIcin .showIcon");
  icon.classList.remove("showIcon")
  if(countIcon > icons.length){
    icons[0].classList.add("showIcon");
    countIcon = 1;
  }else{
    icon.nextElementSibling.classList.add("showIcon")
  }
}, 3000)
// Icon Slide Show

// Manu Start
document.querySelector('.menu').addEventListener('click', () => {
	document.querySelectorAll('.target').forEach((item) => {
		item.classList.toggle('change');
	})
})
// Manu end

// light
document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll('.menu').forEach((item) => {
		item.classList.toggle('light');
	})
})


