
let mybutton = document.getElementById('myBtn');


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

function aceitarCookies() {
  
  document.cookie = "cookies_aceitos=true; expires=" + new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000).toUTCString() + "; path=/";
  
  document.getElementById('cookie-banner').style.display = 'none';

}

document.addEventListener("DOMContentLoaded", function() {  
  
  var elementoaesconder = document.querySelector(".botoes");
  
  setTimeout(function() {
    elementoaesconder.style.display = "none";
  }, 2000); 
});
document.addEventListener("DOMContentLoaded", function() {
  
  var elementoaesconder = document.querySelector(".botoes1");
  
  setTimeout(function() {
    elementoaesconder.style.display = "block";
  }, 2000); 
});

if (window.location.href.endsWith('index.php')) {  
  window.onload = function() {
    setTimeout(function() {
      window.location.href = 'inicio.html';
    }, 4300); 
  };
}



