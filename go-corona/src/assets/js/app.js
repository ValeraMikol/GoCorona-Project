// burger

const burgerBtn = document.querySelector("#burger-btn"),
  menu = document.querySelector(".menu__body")

const openBurger = () => {
  burgerBtn.classList.toggle("active")
  menu.classList.toggle("active")
}

burgerBtn.addEventListener("click", openBurger)
