var resizer_img = document.getElementById('project-view-resizer-image'); 
var resizer_btn = document.getElementById('project-view-resizer');
var resize_itm = document.getElementById('project-view');
var newWidth;
var mouseXChange;

let mouseX = 0;
let startingWidth = 0;

const resize = function (e) {
    mouseXChange = e.clientX - mouseX;
    newWidth = startingWidth + mouseXChange;
    resize_itm.style.width = `${newWidth}px`;
};

const mouseBtnUp = function () {
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('mouseup', mouseBtnUp);
    document.body.style.removeProperty('cursor');
    if (newWidth <= 32) {
        resize_itm.style.width = '0px';
        resizer_img.src="../../assets/images/expand-icon.png";
    } else {
        resizer_img.src="../../assets/images/drag-icon.png";
    }
};

const mouseDoubleClick = function() {
    resize_itm.style.width = getComputedStyle(document.body).getPropertyValue('--default-project-view-width');
}

const mouseBtnDown = function (e) {
    mouseX = e.clientX;
    startingWidth = resize_itm.getBoundingClientRect().width;
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', mouseBtnUp);
    resizer_btn.addEventListener('dblclick', mouseDoubleClick);
    document.body.style.cursor = 'col-resize';
};

resizer_btn.addEventListener('mousedown', mouseBtnDown);

