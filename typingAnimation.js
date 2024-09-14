document.addEventListener('DOMContentLoaded', function () {
    var div = document.querySelector('.content .typewriter-text');
    var newText = 'playing football.';
  
    setTimeout(function () {
      div.setAttribute('data-text', newText);
      div.style.animation = 'typing 5s steps(40) forwards';
    }, 7000); // Adjust the timing according to your need
  });