const tabs = document.querySelectorAll(".author-block__nav-item");
const contents = document.querySelectorAll(".blog__tabs-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("author-block__nav-item--active"));
    tab.classList.add("author-block__nav-item--active");

    const target = tab.getAttribute("data-target");

    contents.forEach((content) => {
      if (content.id === target) {
        content.classList.add("blog__tabs-panel--active");
      } else {
        content.classList.remove("blog__tabs-panel--active");
      }
    });
  });
});
