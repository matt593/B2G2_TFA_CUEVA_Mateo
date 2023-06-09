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

// Scroll up bouton

window.addEventListener('scroll', function() {
    var scrollButton = document.getElementById('scrollUpButton');
    if (window.pageYOffset > 100) {
      scrollButton.style.display = 'block'; /* Affiche le bouton lorsque l'utilisateur fait défiler la page */
    } else {
      scrollButton.style.display = 'none'; /* Masque le bouton lorsque l'utilisateur est en haut de la page */
    }
  });
  
  document.getElementById('scrollUpButton').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); /* Anime le défilement jusqu'en haut de la page */
  });

  //Date footer
let date = new Date();
let year = date.getFullYear();

let yr = document.querySelector("#year");
yr.innerText = year;
