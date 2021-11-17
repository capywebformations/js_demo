// Select open and close button
document.querySelectorAll(".header__nav__burger--open, .header__nav__burger--close").forEach(function(element) {
    // Add click event on open and close button
    element.addEventListener("click", function() {
        
        // If "header__nav" has the "header__nav--open" class, remove it
        // If "header__nav" doesn't have the "header__nav--open" class, add it
        document.querySelector(".header__nav").classList.toggle("header__nav--open");
    })
});
