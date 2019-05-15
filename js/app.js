// When the user scrolls the page, execute myFunction 
window.onscroll = function() {makeSticky()};

// Get the header
var header = document.getElementById("stickyheader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function makeSticky() {
  if (window.pageYOffset > sticky || window.pageXOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
/*
var states = ['washington', 'arizona', 'california'];
for(var i = 0; i < 7; i++) { //# of tries
  var guessStates = prompt('Guess which states I have lived in.').toLowerCase();
  for(var s = 0; s < states.length; s++) {
    var guess = states[s]
    if(guessStates === guess) {
      alert('You guessed right! The answers were ' + states[0] + ', ' + states[1] + ', and ' + states[2]);
      i = 7;
      break;
    } else {
      alert('Guess again.');
      break;
    }
  }
}*/