let scrollUp = document.querySelector(".scroll-up");


window.onscroll = function () {

    if (window.scrollY >= 635) {

        scrollUp.style.display = "block";

    } else {

        scrollUp.style.display = "none";

    }
}

scrollUp.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth',
    })
};



var typed = new Typed('#element', {
    strings: ['Larry Daniels', 'Developer', 'Designer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
    loopCount: Infinity,
});


