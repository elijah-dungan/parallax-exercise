    
/* -----------------------------------------------Navigation Bar----------------------------------------------- */

window.onscroll = function() {makeSticky()}; // When the user scrolls the page, execute makeSticky. 

var nav = document.getElementById('stickynav'); // Get the nav element, id="stickynav".

var sticky = nav.offsetTop; // Get the offset position of the navbar.

function makeSticky() { // makes navbar sticky upon scroll. Removes sticky when scroll is returned to beginning y position.
  var grabElement = document.getElementById('stickynav');
  var grabList = document.getElementsByClassName('navListItem');
  if(window.pageYOffset > sticky) {
    grabElement.style.position = 'fixed';
    grabElement.style.backgroundColor = 'rgb(255, 255, 255, 1)';
    grabElement.style.transition = transitionTime;
    for(var i = 0; i < grabList.length; i++) {
      grabList[i].style.color = 'black';
    } 
  } else if(window.pageXOffset > sticky) {
      grabElement.style.position = 'fixed';
  } else {
    grabElement.style.position = 'absolute';
    grabElement.style.backgroundColor = 'rgb(255, 255, 255, 0)';
    grabElement.style.transition = transitionTime;
    for(var i = 0; i < grabList.length; i++) {
      grabList[i].style.color = 'white';
    }
  }
}

var transitionTime = '0.6s'; // sets transition time for CSS fade-in fade out animation

function makeOpaque() { // makes navbar opaque, used with onmouseover.
  if (window.pageYOffset < nav.offsetTop) {
  } else {
    var grabElement = document.getElementById('stickynav');
    var grabList = document.getElementsByClassName('navListItem');
    grabElement.style.backgroundColor = 'rgb(255, 255, 255, 1)';
    grabElement.style.transition = transitionTime;
    for(var i = 0; i < grabList.length; i++) {
      grabList[i].style.color = 'black';
    }
  }
}

function makeTransparent() { // makes navbar transparent, used with onmouseout.
  if (window.pageYOffset > nav.offsetTop) {
  } else {
    var grabElement = document.getElementById('stickynav');
    var grabList = document.getElementsByClassName('navListItem');
    grabElement.style.backgroundColor = 'rgb(255, 255, 255, 0)';
    grabElement.style.transition = transitionTime;
    for(var i = 0; i < grabList.length; i++) {
      grabList[i].style.color = 'white';
    }
  }
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