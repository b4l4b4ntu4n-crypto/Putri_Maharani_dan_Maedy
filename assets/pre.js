var scrollTop = 0;
var scrollLeft = 0;
var isScrollLocked = false;

function lockScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    isScrollLocked = true;
    window.onscroll = function () {
        if (isScrollLocked) {
            window.scrollTo(scrollLeft, scrollTop);
        }
    };
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
}

function enableScroll() {
    isScrollLocked = false;
    window.onscroll = null;

    document.documentElement.classList.add("invitation-opened");
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", function () {
    var coverButton = document.getElementById("button-cover");
    var coverModal = document.getElementById("myModal");

    // Lock only when the opening cover exists.
    if (coverButton || coverModal) {
        lockScroll();
    } else {
        enableScroll();
    }

    if (coverButton) {
        coverButton.addEventListener("click", enableScroll);
    }

    // Safety fallback: never keep page locked forever.
    setTimeout(function () {
        if (isScrollLocked) {
            enableScroll();
        }
    }, 6000);
});

// Preloader timeout fallback
setTimeout(function () {
    var preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.display = "none";
    }
}, 5000);
