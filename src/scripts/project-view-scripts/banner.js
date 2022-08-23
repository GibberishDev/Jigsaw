// Scrapped code due to shitty accesibility >.>
let banner = document.getElementById('banner');
let recentProjects = document.getElementById('project-list-scroll-container');

recentProjects.addEventListener('wheel', (e) => {
  if (recentProjects.scrollTop == 0 && e.deltaY > 0) {
    banner.style.height = '100px';
  }
  if (recentProjects.scrollTop <= 100 && e.deltaY < 0) {
    banner.style.height = '300px';
  }
});