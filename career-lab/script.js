// Career Lab, interaction layer.
// Kept deliberately to the interactions Britebound actually uses:
// a scroll-progress line, a nav that turns solid on scroll, gentle scroll reveals,
// and odometer digit-roll counters. No mouse spotlights, no parallax, no glass.
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Scroll progress + sticky nav state */
  var progress = document.getElementById('progress');
  var nav = document.getElementById('nav');
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var top = h.scrollTop || document.body.scrollTop || 0;
    if (progress) progress.style.width = (max > 0 ? (top / max) * 100 : 0) + '%';
    if (nav) nav.classList.toggle('is-stuck', top > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Reveal on scroll, with a light stagger between siblings */
  var reveals = document.querySelectorAll('.reveal');
  if (reduce) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(function (el) {
      var sibs = Array.prototype.slice.call(el.parentElement.children).filter(function (c) { return c.classList.contains('reveal'); });
      var idx = sibs.indexOf(el);
      if (idx > 0) el.style.transitionDelay = (idx * 90) + 'ms';
      io.observe(el);
    });
  }

  /* Odometer digit-roll counters */
  function build(el) {
    var raw = el.getAttribute('data-value');
    var suffix = el.getAttribute('data-suffix') || '';
    el.innerHTML = '';
    var rolls = [];
    String(raw).split('').forEach(function (ch) {
      if (ch === '.') {
        var dot = document.createElement('span'); dot.className = 'dot'; dot.textContent = '.'; el.appendChild(dot); return;
      }
      var target = parseInt(ch, 10);
      var digit = document.createElement('span'); digit.className = 'digit';
      var roll = document.createElement('span'); roll.className = 'roll';
      for (var n = 0; n <= target; n++) { var s = document.createElement('span'); s.textContent = n; roll.appendChild(s); }
      digit.appendChild(roll); el.appendChild(digit);
      rolls.push({ roll: roll, target: target });
    });
    if (suffix) { var suf = document.createElement('span'); suf.className = 'suffix'; suf.textContent = suffix; el.appendChild(suf); }
    return rolls;
  }
  document.querySelectorAll('.odometer').forEach(function (el) {
    var rolls = build(el);
    if (reduce) { rolls.forEach(function (r) { r.roll.style.transform = 'translateY(-' + (r.target * 100) + '%)'; }); return; }
    var o = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        rolls.forEach(function (r, i) { setTimeout(function () { r.roll.style.transform = 'translateY(-' + (r.target * 100) + '%)'; }, i * 120); });
        o.unobserve(e.target);
      });
    }, { threshold: 0.6 });
    o.observe(el);
  });

  /* Smooth anchor scrolling */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    });
  });
})();
