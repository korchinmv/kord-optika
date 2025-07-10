const toggleButton = document.querySelector(".seo-block__btn");
const toggleButtonText = document.querySelector(".seo-block__btn-text");
const textHidden = document.querySelector(".seo-block__text-hidden");
let isHidden = true;

if (toggleButton) {
  toggleButton.addEventListener("click", function () {
    if (isHidden) {
      textHidden.classList.add("visible");
      toggleButton.classList.add("seo-block__btn--active");
      toggleButtonText.textContent = "Свернуть";
      isHidden = false;
    } else {
      textHidden.classList.remove("visible");
      toggleButton.classList.remove("seo-block__btn--active");
      toggleButtonText.textContent = "Развернуть";
      isHidden = true;
    }
  });
}
