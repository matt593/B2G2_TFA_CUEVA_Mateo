"use strict";

//Burger Menu

let btn = document.querySelector("#btn-burger");
btn.addEventListener("click", menu);
let burger = document.querySelector("#menu-burger");
let display = "off";
function menu(){
    if (display == "off"){
        burger.classList.remove("header--no-display");
        setTimeout(function(){
            burger.classList.remove("header--display");
            btn.classList.add("header--cross");
        },1);
        display = "on";
    }else if (display == "on"){
        burger.classList.add("header--display");
        btn.classList.remove("header--cross");
        setTimeout(function(){burger.classList.add("header--no-display");},300);
        display = "off";
}
}

// Animation 1er image
document.addEventListener("DOMContentLoaded", function() {
    var image = document.querySelector(".image__content");
    setTimeout(function() {
      image.classList.add("visible");
    }, 500); // Délai de 1 seconde avant d'ajouter la classe "visible"
  });

  document.addEventListener("DOMContentLoaded", function() {
    var image = document.querySelector(".image__content2");
    setTimeout(function() {
      image.classList.add("visible");
    }, 650); // Délai de 1 seconde avant d'ajouter la classe "visible"
  });

  document.addEventListener("DOMContentLoaded", function() {
    var image = document.querySelector(".image__content1");
    setTimeout(function() {
      image.classList.add("visible");
    }, 850); // Délai de 1 seconde avant d'ajouter la classe "visible"
  });