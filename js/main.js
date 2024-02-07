
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

function moveAndNavigate(url) {
  const buttons = document.querySelectorAll('.botoes button');
  buttons.forEach(button => {
    button.style.animation = 'moveRightAndDisappear 1s forwards';
  });

  setTimeout(() => {
    window.location.href = url;
  }, 300); 
}