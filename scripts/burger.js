const burgerOpenerButton = document.querySelector("#burger-opener");
const burgerIcon = document.querySelector("#burger-icon");
const burger = document.querySelector("#burger");

const linksWrapperInBurger = document.querySelector("#burger ul");

let opened = false;

function openBurgerMenu() {
    burgerIcon.setAttribute("src", "assets/icons/burger-close.png");
    burger.classList.remove("burger__closed");
    burger.classList.add("burger__opened");
}

function closeBurgerMenu() {
    burgerIcon.setAttribute("src", "assets/icons/burgerMenu.png");
    burger.classList.add("burger__closed");
    burger.classList.remove("burger__opened");
}

burgerOpenerButton.addEventListener("click", function (event) {
    opened = !opened;

    if (opened) openBurgerMenu();
    else closeBurgerMenu();
});

linksWrapperInBurger.addEventListener("click", function (event) {
    if (event.srcElement.className === "burger__link") {
        closeBurgerMenu();
    }
});