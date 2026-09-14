// Career Lab — interaction layer.
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Scroll progress + sticky nav state ─────────────────── */
  var progress = document.getElementById('progress');
  var nav = document.getElementById('nav');
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var p = max > 0 ? (h.scrollTop || document.body.scrollTop) / max : 0;
    if (progress) progress.style.width = (p * 100) + '%';
    if (nav) nav.classList.toggle('is-stuck', (h.scrollTop || 0) > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Reveal on scroll ───────────────────────────────────── */
  var reveals = document.querySelectorAll('.reveal');
  if (reduce) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); revealIO.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    // stagger siblings within a grid/row
    reveals.forEach(function (el) {
      var sibs = Array.prototype.slice.call(el.parentElement.children).filter(function (c) { return c.classList.contains('reveal'); });
      var idx = sibs.indexOf(el);
      if (idx > 0) el.style.transitionDelay = (idx * 90) + 'ms';
      revealIO.observe(el);
    });
  }

  /* ── Hero: kinetic headline words ───────────────────────── */
  var words = document.querySelectorAll('.hero__title .word');
  if (reduce) {
    words.forEach(function (w) { w.classList.add('is-in'); });
  } else {
    words.forEach(function (w, i) {
      setTimeout(function () { w.classList.add('is-in'); }, 200 + i * 110);
    });
  }

  /* ── Hero: mouse spotlight + parallax ───────────────────── */
  var hero = document.getElementById('hero');
  var spot = document.getElementById('spot');
  var depthEls = document.querySelectorAll('[data-depth]');
  if (hero && !reduce) {
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width;
      var y = (e.clientY - r.top) / r.height;
      if (spot) spot.style.setProperty('--mx', (x * 100) + '%'), spot.style.setProperty('--my', (y * 100) + '%');
      depthEls.forEach(function (el) {
        var d = parseFloat(el.getAttribute('data-depth')) || 0;
        el.style.transform = 'translate(' + ((x - 0.5) * d * 60).toFixed(1) + 'px,' + ((y - 0.5) * d * 60).toFixed(1) + 'px)';
      });
    });
  }
  // subtle vertical parallax on hero blobs while scrolling
  if (!reduce) {
    window.addEventListener('scroll', function () {
      var y = window.scrollY || 0;
      document.querySelectorAll('.hero__blob').forEach(function (b) {
        var d = parseFloat(b.getAttribute('data-depth')) || 0;
        b.style.transform = 'translateY(' + (y * d * 1.2).toFixed(1) + 'px)';
      });
    }, { passive: true });
  }

  /* ── Audience tab switcher (sliding ink) ────────────────── */
  var tabs = document.querySelectorAll('.who2__tab');
  var panels = document.querySelectorAll('.who2__panel');
  var ink = document.getElementById('ink');
  function moveInk(tab) {
    if (!ink || !tab) return;
    ink.style.width = tab.offsetWidth + 'px';
    ink.style.transform = 'translateX(' + tab.offsetLeft + 'px)';
  }
  function activate(name, tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    panels.forEach(function (p) { p.classList.toggle('is-active', p.getAttribute('data-panel') === name); });
    moveInk(tab);
  }
  tabs.forEach(function (t) {
    t.addEventListener('click', function () { activate(t.getAttribute('data-panel'), t); });
  });
  // init ink position
  var firstTab = document.querySelector('.who2__tab.is-active');
  if (firstTab) requestAnimationFrame(function () { moveInk(firstTab); });
  window.addEventListener('resize', function () { moveInk(document.querySelector('.who2__tab.is-active')); });

  /* ── Odometer digit-roll counters ───────────────────────── */
  function buildOdometer(el) {
    var raw = el.getAttribute('data-value');       // e.g. "9", "3.3", "250"
    var suffix = el.getAttribute('data-suffix') || '';
    el.innerHTML = '';
    var chars = String(raw).split('');
    var rolls = [];
    chars.forEach(function (ch) {
      if (ch === '.') {
        var dot = document.createElement('span'); dot.className = 'dot'; dot.textContent = '.'; el.appendChild(dot);
        return;
      }
      var target = parseInt(ch, 10);
      var digit = document.createElement('span'); digit.className = 'digit';
      var roll = document.createElement('span'); roll.className = 'roll';
      for (var n = 0; n <= target; n++) {
        var s = document.createElement('span'); s.textContent = n; roll.appendChild(s);
      }
      digit.appendChild(roll); el.appendChild(digit);
      rolls.push({ roll: roll, target: target });
    });
    if (suffix) { var suf = document.createElement('span'); suf.className = 'suffix'; suf.textContent = suffix; el.appendChild(suf); }
    return rolls;
  }
  var odos = document.querySelectorAll('.odometer');
  odos.forEach(function (el) {
    var rolls = buildOdometer(el);
    if (reduce) {
      rolls.forEach(function (r) { r.roll.style.transform = 'translateY(-' + (r.target * 100) + '%)'; });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        rolls.forEach(function (r, i) {
          setTimeout(function () { r.roll.style.transform = 'translateY(-' + (r.target * 100) + '%)'; }, i * 120);
        });
        io.unobserve(e.target);
      });
    }, { threshold: 0.6 });
    io.observe(el);
  });

  /* ── Smooth anchor scrolling ────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    });
  });
})();
