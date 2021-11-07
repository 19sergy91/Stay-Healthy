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

$('.programs__slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    draggable: false,
    swipe: true,

    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 599,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: false,
            }
        },
    ],
  });