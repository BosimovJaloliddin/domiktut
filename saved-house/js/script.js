// Когда пользователь прокручивает вниз 50px от верхней части документа, измените размер шрифта заголовка
window.onscroll = function () {
   setInterval(scrollFunction, 200);
};

function scrollFunction() {
   if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
   ) {
      document.getElementById("nav-light").classList.add("nav-scroll");
      document.getElementById("nav").style.opacity = "0";
   } else {
      document.getElementById("nav-light").classList.remove("nav-scroll");
      document.getElementById("nav").style.opacity = "1";
   }
}

var burger_o = document.getElementsByClassName("burger-open");
var burger_x = document.getElementsByClassName("burger-close");
var bur = document.getElementsByClassName("burger");
burger_o[0].onclick = function () {
   bur[0].classList.add("burger-active");
};
burger_x[0].onclick = function () {
   bur[0].classList.remove("burger-active");
};

var search_o = document.getElementsByClassName("serch-open");
var search_x = document.querySelectorAll(".serch-close");
var par = document.getElementsByClassName("nav__serch-form");
search_o[0].onclick = function () {
   par[0].classList.add("serch-active");
   document.getElementById("serch__svg-x").style.display = "flex";
   document.getElementById("serch__svg-serch").style.display = "none";
};
for (var i = 0; i < search_x.length; i++) {
   search_x[i].onclick = function () {
      par[0].classList.remove("serch-active");
      document.getElementById("serch__svg-x").style.display = "none";
      document.getElementById("serch__svg-serch").style.display = "flex";
   };
}


var phone_o = document.getElementsByClassName("phone-open");
var phone_x = document.querySelectorAll(".phone-close");
var phone = document.getElementsByClassName("phone");
phone_o[0].onclick = function () {
   phone[0].classList.add("phone-active");
   document.getElementById("phone__svg-x").style.display = "flex";
   document.getElementById("phone__svg-phone").style.display = "none";
};
for (var i = 0; i < phone_x.length; i++) {
   phone_x[i].onclick = function () {
      phone[0].classList.remove("phone-active");
      document.getElementById("phone__svg-x").style.display = "none";
      document.getElementById("phone__svg-phone").style.display = "flex";
   };
}
