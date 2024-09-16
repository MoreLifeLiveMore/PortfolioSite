document.addEventListener("DOMContentLoaded", function () {
  var div = document.querySelector(".typewriter");
  var newText = "playing football.";

  setTimeout(function () {
    div.setAttribute("data-text", newText);
    div.animation = "typing 5s steps(40) forwards";
  }, 1000); // Adjust the timing according to your need
});
