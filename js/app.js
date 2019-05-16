/* ---------------------------------------------------Pre-load--------------------------------------------------- */
makeSticky(); // preloads function to prevent offset of navbar.
animate(); // preloads function to prevent misfire of animation dependent on browser scrollbar position.
window.onscroll = function() {makeSticky()}; // when the user scrolls the page, executes makeSticky. 
/* ---------------------------------------------------Pre-load--------------------------------------------------- */
/* ----------------------------------------------Global Declarations--------------------------------------------- */
var grabElement = document.getElementById('stickynav'); // gets the navbar element.
var sticky = grabElement.offsetTop; // gets the offset position of the navbar.
var grabList = document.getElementsByClassName('navListItem'); // gets the links in the navbar.
var transitionTime = '0.6s'; // sets transition time for CSS fade-in fade out animation
/* ----------------------------------------------Global Declarations--------------------------------------------- */
/* ----------------------------------------------Nav Bar and Header---------------------------------------------- */
function makeSticky() { // makes navbar sticky upon scroll
  var grabElement = document.getElementById('stickynav');
  var grabList = document.getElementsByClassName('navListItem');
  var grabHeader = document.getElementById('magic_header')
  if(window.pageYOffset > sticky) { // when scrolling down, makes navbar sticky and transparent while removing the header.
    grabElement.style.position = 'fixed';
    grabElement.style.backgroundColor = 'rgb(255, 255, 255, 0.9)';
    grabElement.style.transition = transitionTime;
    grabHeader.style.backgroundColor = 'rgb(151, 61, 96, 0)';
    grabHeader.style.transition = transitionTime;
  } else if(window.pageXOffset > sticky) { // when scrolling horizontally, maintains the style of the navbar and header.
      grabElement.style.position = 'fixed';
      grabElement.style.backgroundColor = 'rgb(255, 255, 255, 0.9)';
      grabHeader.style.backgroundColor = 'rgb(151, 61, 96, 1)';
  } else { // when scrolled to top position, resets styles of the navbar and header.
      grabElement.style.position = 'fixed';
      grabElement.style.backgroundColor = 'rgb(255, 255, 255, 1)';
      grabElement.style.transition = transitionTime;
      grabHeader.style.backgroundColor = 'rgb(151, 61, 96, 1)';
      grabHeader.style.transition = transitionTime;
  }
}
/* ----------------------------------------------Nav Bar and Header---------------------------------------------- */
/* ------------------------------------------------Logo and Body------------------------------------------------- */
function animate() { // scrolls background image up while fading logo when user scrolls down.
  $(window).scroll(function() { // gets scroll position and multiplies by number to increase/decrease speed, adds this as px to CSS property.
    var scroll_position = $(window).scrollTop() * 0.50; // change rate of speed here.
    $('body').css({ 
      'background-position-y' : - scroll_position + 'px', // change y to x for horizontal scroll effect.
    })
  })
  $(window).scroll(function() { // gets scroll position and multiplies by number to fade, changes alpha to CSS property.
    var scroll_position = $(window).scrollTop() / -450; // change rate of fade here.
    $('#logo').css({
      'opacity' : ++ scroll_position, 
      'filter' : ' alpha(opacity=' + ++ scroll_position * 100 + ')'
    })
  })
}
/* ------------------------------------------------Logo and Body------------------------------------------------- */