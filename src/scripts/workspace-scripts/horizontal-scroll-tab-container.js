const tabContainer = document.getElementById('tab-container');

tabContainer.addEventListener("wheel", (scroll) => {
  scroll.preventDefault();
  tabContainer.scrollLeft += scroll.deltaY * 0.5;
});