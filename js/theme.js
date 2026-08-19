(function () {
  var STORAGE_KEY = "theme";
  var buttons = document.querySelectorAll(".theme-btn");

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var colors = window.__THEME_COLORS || {};
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta && colors[theme]) meta.setAttribute("content", colors[theme]);
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
