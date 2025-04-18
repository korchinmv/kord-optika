document.addEventListener("DOMContentLoaded", function () {
  const customSelects = document.querySelectorAll(".custom-select");

  customSelects.forEach((select) => {
    const header = select.querySelector(".custom-select__header");
    const current = select.querySelector(".custom-select__current");
    const selectElement = select.querySelector(".custom-select__select");
    const items = select.querySelectorAll(".custom-select__item");

    // Инициализация
    function initSelect() {
      const selectedOption = selectElement.options[selectElement.selectedIndex];
      current.textContent = selectedOption.textContent;

      items.forEach((item) => {
        if (item.dataset.value === selectElement.value) {
          item.classList.add("selected");
        }
      });
    }

    // Открытие/закрытие dropdown
    function toggleDropdown() {
      select.classList.toggle("custom-select--active");

      // Закрытие других открытых селектов
      document.querySelectorAll(".custom-select").forEach((otherSelect) => {
        if (
          otherSelect !== select &&
          otherSelect.classList.contains("custom-select--active")
        ) {
          otherSelect.classList.remove("custom-select--active");
        }
      });
    }

    // Выбор значения
    function selectItem(value, text) {
      selectElement.value = value;
      current.textContent = text;
      current.style.color = "rgba(62, 66, 91, 1)";

      // Обновление стилей выбранного элемента
      items.forEach((item) => {
        item.classList.remove("selected");
        if (item.dataset.value === value) {
          item.classList.add("selected");
        }
      });

      // Закрытие dropdown
      select.classList.remove("custom-select--active");

      // Триггер события изменения
      selectElement.dispatchEvent(new Event("change"));
    }

    // Обработчики событий
    header.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleDropdown();
    });

    items.forEach((item) => {
      item.addEventListener("click", function () {
        selectItem(this.dataset.value, this.textContent);
      });
    });

    document.addEventListener("click", function (e) {
      if (!select.contains(e.target)) {
        select.classList.remove("custom-select--active");
      }
    });

    header.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleDropdown();
      } else if (e.key === "Escape") {
        select.classList.remove("custom-select--active");
      }
    });

    // Инициализация при загрузке
    initSelect();

    // Обновление при изменении оригинального select
    selectElement.addEventListener("change", initSelect);
  });
});
