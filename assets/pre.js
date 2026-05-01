// Get the current page scroll position
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

// Lock scroll
window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
};

function enableScroll() {
    console.log("enableScroll called");
    // Unlock scroll
    window.onscroll = null;
    
    // Add class to html to force overflow: auto
    document.documentElement.classList.add('invitation-opened');
    
    // Fallback for immediate style application
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    
    // Remove unselectable attributes globally
    document.querySelectorAll('[unselectable]').forEach(el => {
        el.removeAttribute('unselectable');
    });

    // Remove any user-select: none styles
    const allElements = document.querySelectorAll('*');
    for (let i = 0; i < allElements.length; i++) {
        if (allElements[i].style.userSelect === 'none') {
            allElements[i].style.userSelect = 'auto';
        }
    }

    console.log("Scroll enabled with class and forced styles");
}

// Preloader timeout fallback
setTimeout(function() {
  var preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.display = 'none';
  }
}, 5000);
