const tabContainer = document.getElementById('tab-container');
const breadcrumbs = document.getElementById('breadcrumbs');

tabContainer.addEventListener("wheel", (scroll) => {
  scroll.preventDefault();
  tabContainer.scrollLeft += scroll.deltaY * 0.5;
});

breadcrumbs.addEventListener("wheel", (scroll) => {
  scroll.preventDefault();
  breadcrumbs.scrollLeft += scroll.deltaY * 0.5;
});