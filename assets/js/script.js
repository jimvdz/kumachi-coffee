function show() {
    var mobileNav = document.getElementById('header__mobile__nav');
    var mobileHeader = document.querySelector('.header__mobile');

    mobileNav.classList.toggle('active');

    if (mobileNav.classList.contains('active')) {
        mobileHeader.style.backgroundColor = "var(--secondary-color)"; // Set to secondary color when nav is open
    } else {
        mobileHeader.style.backgroundColor = "transparent"
    }
}

const hamburgerMenu = document.querySelector('.nav__menu__mobile').addEventListener("click", show);

var lastScrollTop = 0;
var desktopHeader = document.getElementById("header"); 
var mobileHeader = document.querySelector(".header__mobile");
var mobileNav = document.querySelector(".header__mobile__nav");
var hideThreshold = 50; // Height in pixels before showing the header again

window.addEventListener("scroll", () => {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // For desktop header
    if (desktopHeader) {
        if (scrollTop <= 0) {
            desktopHeader.style.top = "0";
            desktopHeader.style.backgroundColor = "transparent";
        } else if (scrollTop > lastScrollTop) {
            desktopHeader.style.top = "-100px";
            desktopHeader.style.backgroundColor = "transparent";
        } else {
            if (scrollTop < lastScrollTop - hideThreshold) {
                desktopHeader.style.top = "0";
                desktopHeader.style.backgroundColor = "var(--secondary-color)";
            }
        }
    }

    // For mobile header
    if (mobileHeader && !mobileNav.classList.contains('active')) { // Only apply scroll behavior when the nav is closed
        if (scrollTop <= 0) {
            mobileHeader.style.top = "0px";
            mobileHeader.style.backgroundColor = "transparent";
        } else if (scrollTop > lastScrollTop) {
            mobileHeader.style.top = "-100px"; // Hide mobile header
            mobileHeader.style.backgroundColor = "transparent";
        } else {
            if (scrollTop < lastScrollTop - hideThreshold) {
                mobileHeader.style.top = "0px"; // Show mobile header
                mobileHeader.style.backgroundColor = "var(--secondary-color)";
            }
        }
    }

    // For mobile navigation bar
    if (mobileNav && !mobileNav.classList.contains('active')) {
        if (scrollTop <= 0) {
            mobileNav.style.top = "65px"; 
            mobileNav.style.backgroundColor = "var(--secondary-color)";
        } else if (scrollTop > lastScrollTop) {
            mobileNav.style.top = "-300px"; 
            mobileNav.style.backgroundColor = "transparent";
        } else {
            if (scrollTop < lastScrollTop - hideThreshold) {
                mobileNav.style.top = "65px";
                mobileNav.style.backgroundColor = "var(--secondary-color)";
            }
        }
    }

    lastScrollTop = scrollTop;
});


// pag sa homepage lang
if (document.title == 'Kumachi Coffee and Pastries | Homepage') {
    // Carousell Images
    const wrapper = document.querySelector(".wrapper");
    const carousel = document.querySelector(".carousel");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const carouselChildrens = [...carousel.children];
    const arrowBtns = document.querySelectorAll(".wrapper i");
    let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
    // Get the number of cards that can fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
    // Insert copies of the last few cards to beginning of carousel for infinite scrolling
    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });
    // Insert copies of the first few cards to end of carousel for infinite scrolling
    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });
    // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
    });
    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        // Records the initial cursor and scroll position of the carousel
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }
    const dragging = (e) => {
        if(!isDragging) return; // if isDragging is false return from here
        // Updates the scroll position of the carousel based on the cursor movement
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }
    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    }
    const infiniteScroll = () => {
        // If the carousel is at the beginning, scroll to the end
        if(carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        }
        // If the carousel is at the end, scroll to the beginning
        else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }
        // Clear existing timeout & start autoplay if mouse is not hovering over carousel
        clearTimeout(timeoutId);
        if(!wrapper.matches(":hover")) autoPlay();
    }
    const autoPlay = () => {
        if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
        // Autoplay the carousel after every 2500 ms
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
    }
    autoPlay();
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
}

