var sidebar = document.getElementById('sidebar-button-container');
var buttons = Array.prototype.slice.call(document.getElementsByClassName('sidebar-button'));
let sidebarSpacer = document.getElementById('sidebar-gutter-spacer');

buttons.forEach(element => {
  element.addEventListener('click', function() {
    document.getElementsByClassName('sidebar-button selected')[0].classList.remove('selected');
    element.classList.add('selected');
    var parentRect = sidebar.getBoundingClientRect();
    var rect = element.getBoundingClientRect();
    sidebarSpacer.style.height = String(rect.top - parentRect.top) + 'px';
});
});