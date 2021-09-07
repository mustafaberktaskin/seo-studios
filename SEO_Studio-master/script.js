(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();



function sendMessage() {
  var txt;
  if (confirm("Are you sure you want to send the Message ? ")) {
    txt = "Your Message has been Sent. ";
  } else {
  }
  document.getElementById("demo").innerHTML = txt;
}

function normalF(){
  var x = document.getElementById("mobilenav");
  x.style.display = "none";
  x.parentNode.childNodes[3].style.display = "block";
  x.parentNode.childNodes[5].style.display = "block";
  x.parentNode.childNodes[7].style.display = "block";
}

function responsivef() {
  var x = document.getElementById("mobilenav");
  x.style.display = "none";
  x.parentNode.childNodes[3].style.display = "block";
  x.parentNode.childNodes[5].style.display = "block";
  x.parentNode.childNodes[7].style.display = "block";

}

function navFunction(){
  var x = document.getElementById("mobilenav");

  console.log(x.parentNode.childNodes);

  x.parentNode.childNodes[3].style.display = "none";
  x.parentNode.childNodes[5].style.display = "none";
  x.parentNode.childNodes[7].style.display = "none";
  x.style.display = "block";
  // x.parentNode.style.display = "none";
  // x.style.display = "block";
}

// if (x.className === "topNav") {
//   x.display = "block";
//   x.className += " responsive";
// } else {
//   x.className = "topNav";
// }