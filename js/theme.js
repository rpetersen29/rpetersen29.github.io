(function () {
  var STORAGE_KEY = "theme";
  var buttons = document.querySelectorAll(".theme-btn");

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    buttons.forEach(function (btn) {
      var active = btn.getAttribute("data-theme") === theme;
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var theme = btn.getAttribute("data-theme");
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch (e) {}
      applyTheme(theme);
    });
  });

  applyTheme(document.documentElement.getAttribute("data-theme") || "light");
})();
