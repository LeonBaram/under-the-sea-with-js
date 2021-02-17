// width of mobile browser in px
const mobileWidth = 680;

// returns true if browser is of "mobile" size
const isMobile = () => window.innerWidth <= mobileWidth;

const nav = document.querySelector("nav");
const navList = document.querySelector("nav ul");

// create hamburger menu icon
const hamburgerIcon = document.createElement("i");
hamburgerIcon.className = "fas fa-bars";
hamburgerIcon.classList.add("offscreen");
hamburgerIcon.clicked = false;
nav.appendChild(hamburgerIcon);

function updateNavContents() {

    if (isMobile()) {
        navList.classList.add("offscreen");
        hamburgerIcon.classList.remove("offscreen");        
    } else {
        hamburgerIcon.classList.add("offscreen");
        navList.classList.remove("offscreen");
    }
}

// call on page load
updateNavContents();

// call on browser window resize
// note: apparently "resize" event listeners *must* be attached to window object
window.addEventListener("resize", updateNavContents);

function toggleHamburgerIcon() {
    hamburgerIcon.clicked = !hamburgerIcon.clicked;
    navList.classList.toggle("offscreen");
    hamburgerIcon.classList.toggle("offscreen");
}

hamburgerIcon.addEventListener("click", toggleHamburgerIcon);

document.addEventListener("click", function(event) {

    if (!hamburgerIcon.clicked) {
        return;
    }
    switch (event.target) {
        case navList: return;
        case hamburgerIcon: return;
        default: toggleHamburgerIcon();
    }
});