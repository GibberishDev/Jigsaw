const closeButton = document.getElementById('close');
const minimizeButton = document.getElementById('minimize');
const maximizeButton = document.getElementById('maximize');
const maximizeImage = document.getElementById('maximize-image');

var isMaximized = false;

closeButton.addEventListener('click', () => api.window.close());
minimizeButton.addEventListener('click', () => api.window.minimize());
maximizeButton.addEventListener('click', () => api.window.maximize());