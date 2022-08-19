/*
state of dropdown menu:
  true - dropdown is open and will result in changing dropdowns on hovering other titlebar buttons
  false - dropdown is hidden
*/


var dropdownState = false;
var supressTitleBarClicks = false;
var hoveredButtons = [];
var closeTiomeout;
var openTimeout;

function delay(time) {
  
}

function openMenu(parent, otherButtons) {
  supressTitleBarClicks = true
  dropdownState = true;
  var menu = parent.getElementsByClassName('dropdown-container')[0];
  menu.style.top = `${parent.getBoundingClientRect().bottom}px`;
  menu.style.left = `${parent.getBoundingClientRect().left}px`;
  menu.style.display = 'flex';
  otherButtons.forEach(function(btn) {btn.getElementsByClassName('dropdown-container')[0].style.display = 'none'});
  parent.style.userInput = 'none';
}

function closeMenu(parent, otherButtons) {
  var menu = parent.getElementsByClassName('dropdown-container')[0];
  menu.style.display = 'none';
  parent.style.userInput = 'all';
  otherButtons.forEach(
    function(btn) {
      var menu = btn.getElementsByClassName('dropdown-container')[0];
      menu.style.display = 'none';
    });
    supressTitleBarClicks = false;
    dropdownState = false;
}

function buttonClickHandler(button, otherButtons) {
  if (!supressTitleBarClicks) {
    console.log('press');
    openMenu(button, otherButtons);
  }
}

function buttonHoverOnHandler(button, otherButtons) {
  if (dropdownState) {
    clearTimeout(closeTiomeout);
    if (hoveredButtons.indexOf(button) == -1) {
      hoveredButtons.push(button);
    }
    openMenu(button, otherButtons);
  } else {
    openTimeout = setTimeout(() => {
      openMenu(button, otherButtons);
    }, 500);
  }
  
}

function buttonHoverOffHandler(button, otherButtons) {
  if (dropdownState) {
    hoveredButtons = Array.prototype.slice.call(hoveredButtons);
    hoveredButtons.splice(hoveredButtons.indexOf(button), 1);
    closeTiomeout = setTimeout(() => {
      if (hoveredButtons.length == 0) {
        closeMenu(button, otherButtons);
      }
    }, 500);
  } else {
    clearTimeout(openTimeout);
  }
}

function connectEvents() {
  var buttons = document.getElementsByClassName('titlebar-button');
  Array.prototype.slice.call(buttons).forEach(
    function(button) {
      var otherButtons = Array.prototype.slice.call(buttons);
      var index = otherButtons.indexOf(button);
      otherButtons.splice(index, 1);
      button.addEventListener("click", (event) => {buttonClickHandler(button, otherButtons)}, false);
      button.addEventListener("mouseover", (event) => {buttonHoverOnHandler(button, otherButtons)}, false);
      button.addEventListener("mouseleave", (event) => {buttonHoverOffHandler(button, otherButtons)}, false);
    });
}


connectEvents();