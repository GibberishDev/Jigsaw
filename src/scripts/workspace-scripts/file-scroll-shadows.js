var filecont = document.getElementById("file-container")

function applyShadows() {
    var scroll_top = filecont.scrollTop;
    var scroll_height = filecont.scrollHeight;
    var client_height = filecont.clientHeight;
    filecont.classList.remove('top-shadow', 'bottom-shadow', 'both-shadows');
    if (scroll_height > client_height) {
        if (scroll_top == 0) {
            filecont.classList.add('bottom-shadow');
        } else if ((scroll_top - (scroll_height - client_height)) == 0) {
            filecont.classList.add('top-shadow');
        } else {
            filecont.classList.add('both-shadows');
        }
    }
}

filecont.addEventListener(
    'scroll',
    function() { applyShadows() },
    false
)

applyShadows()