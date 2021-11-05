const vid = document.getElementById ("video");
vid.addEventListener ("ended", resetVideo, false);

function resetVideo() {
this.src = this.src
}

const burgerMenu = document.querySelector(".header__burger");
if (burgerMenu) {
    const headerMenu = document.querySelector(".header__menu");
    burgerMenu.addEventListener("click", function() {
        document.body.classList.toggle("_lock");
        burgerMenu.classList.toggle("_menu");
        headerMenu.classList.toggle("_menu");
    });
};