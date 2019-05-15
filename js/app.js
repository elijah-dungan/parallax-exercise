    
/* -----------------------------------------------Navigation Bar----------------------------------------------- */


// When the user scrolls the page, execute makeSticky. 
window.onscroll = function() {makeSticky()};

// Get the nav element, id="stickynav".
var nav = document.getElementById('stickynav');

// Get the offset position of the navbar.
var sticky = nav.offsetTop;

// makes navbar sticky upon scroll. Removes sticky when scroll is returned to beginning y position.
function makeSticky() {
  if(window.pageYOffset > sticky || window.pageXOffset > sticky) {
    var grabElement = document.getElementById('stickynav');
    grabElement.style.position = 'fixed';
    grabElement.style.backgroundColor = 'rgb(255, 255, 255, 1)';
    grabElement.style.transition = transitionTime;
  } else {
    var grabElement = document.getElementById('stickynav');
    grabElement.style.position = 'absolute';
    grabElement.style.backgroundColor = 'rgb(255, 255, 255, 0)';
    grabElement.style.transition = transitionTime;
  }
}

// sets transition time for CSS fade-in fade out animation
var transitionTime = '0.6s';

// makes navbar opaque, used with onmouseover.
function makeOpaque() {
  var grabElement = document.getElementById('stickynav');
  grabElement.style.backgroundColor = 'rgb(255, 255, 255, 1)';
  grabElement.style.transition = transitionTime;
}
// makes navbar transparent, used with onmouseout.
function makeTransparent() {
  var grabElement = document.getElementById('stickynav');
  grabElement.style.backgroundColor = 'rgb(255, 255, 255, 0)';
  grabElement.style.transition = transitionTime;
}

/* -----------------------------------------------Navigation Bar----------------------------------------------- */







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