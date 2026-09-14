/**
 * Shared prototype toolbar: actions on the left, "internal use only" on the right.
 * Load from every prototype HTML file. Home URL is derived from this script's location
 * so it works on GitHub Pages and when the repo root is served locally.
 *
 * A prototype with multiple versions adds a switcher by declaring them on the script tag:
 *   data-version-label="Directory Revamp"
 *   data-version-current="version-a"
 *   data-versions='[{"id":"version-a","label":"Version A","href":"../version-a/index.html"},{"id":"annalise-original","label":"Annalise original","href":"../annalise-original/index.html"}]'
 * Each href is resolved against the page that loads the script.
 */
(function () {
  if (window.__foragePrototypeToolbar) return;
  window.__foragePrototypeToolbar = true;

  var script = document.currentScript;
  if (!script || !script.src) return;

  var params = new URLSearchParams(window.location.search);
  var fig = params.get("figma");
  if (fig === "1" || fig === "list" || fig === "editor" || fig === "portal") {
    document.documentElement.classList.add("prototype-figma-capture");
    return;
  }

  var css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = new URL("prototype-toolbar.css", script.src).href;
  document.head.appendChild(css);

  /**
   * Demo-only autofill: pages register a { good, bad } handler pair once their
   * app mounts; the toolbar calls whichever is clicked. Registration can happen
   * any time (before or after the toolbar mounts) since the buttons read
   * window.__prototypeAutofillHandlers at click time, not at mount time.
   */
  window.registerPrototypeAutofill = function (handlers) {
    window.__prototypeAutofillHandlers = handlers || null;
  };

  function runAutofill(kind) {
    var handlers = window.__prototypeAutofillHandlers;
    if (handlers && typeof handlers[kind] === "function") handlers[kind]();
  }

  function buildAutofillControls() {
    var wrap = document.createElement("div");
    wrap.className = "prototype-toolbar-autofill";

    var good = document.createElement("button");
    good.type = "button";
    good.className = "prototype-toolbar-autofill-btn prototype-toolbar-autofill-btn--good";
    good.textContent = "Insert good answer";
    good.title = "Fill the current task input with a sample good answer (demo only, does not submit)";
    good.addEventListener("click", function () {
      runAutofill("good");
    });

    var bad = document.createElement("button");
    bad.type = "button";
    bad.className = "prototype-toolbar-autofill-btn prototype-toolbar-autofill-btn--bad";
    bad.textContent = "Insert bad answer";
    bad.title = "Fill the current task input with a sample weak answer (demo only, does not submit)";
    bad.addEventListener("click", function () {
      runAutofill("bad");
    });

    wrap.appendChild(good);
    wrap.appendChild(bad);
    return wrap;
  }

  var homeHref = new URL("../index.html", script.src).href;
  var CHEVRON_ICON =
    '<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var CHECK_ICON =
    '<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var HOME_ICON =
    '<svg width="16" height="14" viewBox="0 0 16 14.2219" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M8.43194 0.15833C8.18194 -0.0527768 7.81806 -0.0527768 7.56806 0.15833L0.234871 6.38043C-0.0456791 6.61932 -0.0790118 7.03875 0.157095 7.3193C0.393201 7.59985 0.815416 7.63319 1.09597 7.39708L1.77929 6.81931V11.9998C1.77929 13.2275 2.77371 14.2219 4.00147 14.2219H12.0013C13.2291 14.2219 14.2235 13.2275 14.2235 11.9998V6.81931L14.904 7.39708C15.1846 7.63596 15.6068 7.59985 15.8429 7.3193C16.079 7.03875 16.0457 6.61654 15.7651 6.38043L8.43194 0.15833ZM3.11259 11.9998V5.68878L8.00139 1.54164L12.8902 5.68878V11.9998C12.8902 12.4914 12.493 12.8886 12.0013 12.8886H10.668V8.6665C10.668 8.05262 10.1708 7.55541 9.55691 7.55541H6.44586C5.83199 7.55541 5.33477 8.05262 5.33477 8.6665V12.8886H4.00147C3.50981 12.8886 3.11259 12.4914 3.11259 11.9998ZM6.66808 12.8886V8.88872H9.3347V12.8886H6.66808Z"/></svg>';

  function pathKey(url) {
    var path = url.pathname.replace(/\/index\.html$/i, "").replace(/\/$/, "");
    return path || "/";
  }

  function isLanding() {
    try {
      return pathKey(new URL(window.location.href)) === pathKey(new URL(homeHref));
    } catch (e) {
      return false;
    }
  }

  function readVersions() {
    var raw = script.getAttribute("data-versions");
    if (!raw) return null;
    var list;
    try {
      list = JSON.parse(raw);
    } catch (e) {
      return null;
    }
    if (!Array.isArray(list) || list.length < 2) return null;
    return list.filter(function (item) {
      return item && item.href && item.label;
    });
  }

  function buildVersionSwitcher(versions) {
    var currentId = script.getAttribute("data-version-current");
    var prefix = script.getAttribute("data-version-label");
    var current = null;
    for (var i = 0; i < versions.length; i++) {
      if (versions[i].id === currentId) current = versions[i];
    }
    if (!current) current = versions[0];

    var wrap = document.createElement("div");
    wrap.className = "prototype-toolbar-versions";

    var trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "prototype-toolbar-version-trigger";
    trigger.setAttribute("aria-haspopup", "menu");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-label", "Switch prototype version");
    trigger.innerHTML =
      '<span class="prototype-toolbar-version-name"></span>' + CHEVRON_ICON;
    trigger.querySelector(".prototype-toolbar-version-name").textContent =
      (prefix ? prefix + " · " : "") + current.label;

    var menu = document.createElement("div");
    menu.className = "prototype-toolbar-version-menu";
    menu.setAttribute("role", "menu");
    menu.hidden = true;

    versions.forEach(function (version) {
      var item = document.createElement("a");
      item.className = "prototype-toolbar-version-item";
      item.setAttribute("role", "menuitem");
      item.href = new URL(version.href, window.location.href).href;
      if (version === current) item.setAttribute("aria-current", "true");
      item.innerHTML =
        '<span class="prototype-toolbar-version-check">' +
        (version === current ? CHECK_ICON : "") +
        "</span><span></span>";
      item.lastChild.textContent = version.label;
      menu.appendChild(item);
    });

    function close() {
      menu.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
    }

    trigger.addEventListener("click", function (event) {
      event.stopPropagation();
      var open = menu.hidden;
      menu.hidden = !open;
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
    });

    document.addEventListener("click", function (event) {
      if (!wrap.contains(event.target)) close();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !menu.hidden) {
        close();
        trigger.focus();
      }
    });

    wrap.appendChild(trigger);
    wrap.appendChild(menu);
    return wrap;
  }

  function mount() {
    if (document.getElementById("prototype-internal-strip")) return;

    document.documentElement.classList.add("prototype-has-strip");
    document.body.classList.add("prototype-has-strip");

    var strip = document.createElement("div");
    strip.id = "prototype-internal-strip";
    strip.setAttribute("role", "banner");

    var actions = document.createElement("div");
    actions.className = "prototype-toolbar-actions";

    if (!isLanding()) {
      var home = document.createElement("a");
      home.className = "prototype-toolbar-home";
      home.href = homeHref;
      home.setAttribute("aria-label", "Back to all prototypes");
      home.innerHTML = HOME_ICON + "<span>All prototypes</span>";
      actions.appendChild(home);
    }

    var versions = readVersions();
    if (versions) actions.appendChild(buildVersionSwitcher(versions));

    // Presenter shortcuts only belong on AI Task types — other prototypes
    // don't have a good/bad answer to insert.
    if (script.getAttribute("data-version-label") === "AI Task types") {
      actions.appendChild(buildAutofillControls());
    }

    var label = document.createElement("span");
    label.className = "prototype-toolbar-label";
    label.textContent = "Prototype internal use only";

    strip.appendChild(actions);
    strip.appendChild(label);
    document.body.insertBefore(strip, document.body.firstChild);
  }

  if (document.body) mount();
  else document.addEventListener("DOMContentLoaded", mount);
})();
