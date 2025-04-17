const toggleButton = document.querySelector(".salons__list-btn");
const hiddenSalons = document.querySelector(".salons__list-hidden");
const hiddenSalonItems = document.querySelectorAll(
  ".salons__list-hidden .salons__item-hidden"
);
const gradient = document.querySelector(".salons__gradient");
let isHidden = true;

toggleButton.addEventListener("click", function () {
  if (isHidden) {
    gradient.style.opacity = "0";
    hiddenSalons.classList.add("visible");
    hiddenSalonItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("visible");
      }, index * 100);
    });
    toggleButton.textContent = "Скрыть салоны";
    isHidden = false;
  } else {
    gradient.style.opacity = "1";
    hiddenSalonItems.forEach((item) => {
      item.classList.remove("visible");
    });
    setTimeout(() => {
      hiddenSalons.classList.remove("visible");
    }, 100);
    toggleButton.textContent = "Показать все салоны";
    isHidden = true;
  }
});
