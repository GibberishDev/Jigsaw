let projectView = document.getElementById('project-view-sections');
let projectsRecent = document.getElementById('project-list-recent');
let projectsPinned = document.getElementById('project-list-pinned');

var width;

window.addEventListener('resize', () => resizeProjectView());

function resizeProjectView() {
  width = window.innerWidth;
  var maxWidth = parseInt(width * 0.6);
  maxWidth = maxWidth - (256);
  projectView.style.width = String(Math.max(256 + 160 * 2, (256 + parseInt(maxWidth / 160) * 160))) + 'px'
  projectsRecent.style.gridTemplateColumns = 'repeat(' + String(Math.max(2, parseInt(maxWidth / 160))) + ', 160px)';
  projectsPinned.style.gridTemplateColumns = 'repeat(' + String(Math.max(2, parseInt(maxWidth / 160))) + ', 160px)';
}

resizeProjectView();