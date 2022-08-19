let projectView = document.getElementById('project-view-sections');
let projectsContainer = document.getElementById('recent-projects');

var width;

window.addEventListener('resize', () => resizeProjectView());

function resizeProjectView() {
  width = window.innerWidth;
  var maxWidth = parseInt(width * 0.8);
  maxWidth = maxWidth - (256 + 8 + 8);
  projectView.style.width = String(Math.max(256 + 8 + 8 + 282 * 2, (256 + 8 + 8 + parseInt(maxWidth / 282) * 282))) + 'px'
  projectsContainer.style.gridTemplateColumns = 'repeat(' + String(Math.max(2, parseInt(maxWidth / 282))) + ', 282px)';
}

resizeProjectView();