(function () {
  var header = document.querySelector(".site-header");
  var button = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!header || !button || !nav) return;

  function setOpen(open) {
    header.classList.toggle("is-open", open);
    button.setAttribute("aria-expanded", open ? "true" : "false");
    button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  button.addEventListener("click", function (event) {
    event.stopPropagation();
    setOpen(button.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("click", function (event) {
    if (!header.classList.contains("is-open")) return;
    if (!header.contains(event.target)) setOpen(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && header.classList.contains("is-open")) {
      setOpen(false);
      button.focus();
    }
  });

  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) setOpen(false);
  });

  var desktop = window.matchMedia("(min-width: 64rem)");
  function closeIfDesktop() {
    if (desktop.matches) setOpen(false);
  }
  if (desktop.addEventListener) desktop.addEventListener("change", closeIfDesktop);
  else if (desktop.addListener) desktop.addListener(closeIfDesktop);
})();
