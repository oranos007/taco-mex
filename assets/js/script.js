let openButton = document.querySelector(".open-button");
let closeButton = document.querySelector(".close-button");
let smallNav = document.querySelector(".sm-nav");

openButton.addEventListener("click",() => {
    smallNav.style.display="flex"
    closeButton.style.display="flex"
    openButton.style.display="none"
})
closeButton.addEventListener("click",() => {
    smallNav.style.display="none"
    openButton.style.display="flex"
    closeButton.style.display="none"
})