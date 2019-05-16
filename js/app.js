/* -----------------------------------------------Nav Bar + Header----------------------------------------------- */

makeSticky(); // preloads function to prevent offset of Nav Bar.
window.onscroll = function() {makeSticky()}; // when the user scrolls the page, executes makeSticky. 

var nav = document.getElementById('stickynav'); // Get the nav element, id="stickynav".

var sticky = nav.offsetTop; // Get the offset position of the navbar.

function makeSticky() { // makes navbar sticky upon scroll. Removes sticky when scroll is returned to beginning y position.
  var grabElement = document.getElementById('stickynav');
  var grabList = document.getElementsByClassName('navListItem');
  var grabHeader = document.getElementById('magic_header')
  if(window.pageYOffset > sticky) {
    grabElement.style.position = 'fixed';
    grabElement.style.backgroundColor = 'rgb(255, 255, 255, 0.9)';
    grabElement.style.transition = transitionTime;
    grabHeader.style.backgroundColor = 'rgb(151, 61, 96, 0)';
    for(var i = 0; i < grabList.length; i++) {
      grabList[i].style.color = 'black';
    } 
  } else if(window.pageXOffset > sticky) {
      grabElement.style.position = 'fixed';
      grabElement.style.backgroundColor = 'rgb(255, 255, 255, 0)';
      grabHeader.style.backgroundColor = 'rgb(151, 61, 96, 1)';
      for(var i = 0; i < grabList.length; i++) {
        grabList[i].style.color = 'white';
      }
  } else {
    grabElement.style.position = 'fixed';
    grabElement.style.backgroundColor = 'rgb(255, 255, 255, 0)';
    grabHeader.style.backgroundColor = 'rgb(151, 61, 96, 1)';
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
    grabElement.style.backgroundColor = 'rgb(255, 255, 255, 0.9)';
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

/* -----------------------------------------------Nav Bar + Header----------------------------------------------- */

/* --------------------------------------------------Sub Header-------------------------------------------------- */

$(window).scroll(function() { // gets scroll position and multiplies by number to increase/decrease speed, adds this as px to CSS property.
  var scroll_position = $(window).scrollTop() * 0.50; // change rate of speed here.
  $('body').css({
    'background-position-y' : - scroll_position + 'px',
  })
})

/* --------------------------------------------------Sub Header-------------------------------------------------- */

/* -----------------------------------------------------Logo----------------------------------------------------- */

$(window).scroll(function() { // gets scroll position and multiplies by number to fade, changes alpha to CSS property.
  var scroll_position = $(window).scrollTop() / -550; // change rate of fade here.
  $('#logo').css({
    'opacity' : ++ scroll_position, 
    //'filter' : ' alpha(opacity=' + ++ scroll_position * 100 + ');'
  })
})

/* -----------------------------------------------------Logo----------------------------------------------------- */