// Career Lab, interaction layer.
// Signature motif: a fat dashed "journey" path that draws itself in as you scroll,
// with milestone dots that light up as you pass each section. Plus scroll reveals,
// a headline line-reveal, a slow parallax hero, odometer counters, and an employer ticker.
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var main = document.getElementById('top');

  /* Scroll progress + sticky nav state */
  var progress = document.getElementById('progress');
  var nav = document.getElementById('nav');

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

  /* Hero headline line-reveal */
  var lines = document.querySelectorAll('.hero__title .l > span');
  if (reduce) {
    lines.forEach(function (s) { s.classList.add('is-in'); });
  } else {
    lines.forEach(function (s, i) { setTimeout(function () { s.classList.add('is-in'); }, 250 + i * 140); });
  }

  /* Employer ticker: clone the row once so the marquee loops seamlessly */
  var row = document.getElementById('tickerRow');
  if (row) { row.innerHTML += row.innerHTML; }

  /* Odometer digit-roll counters */
  function build(el) {
    var raw = el.getAttribute('data-value');
    var suffix = el.getAttribute('data-suffix') || '';
    el.innerHTML = '';
    var rolls = [];
    String(raw).split('').forEach(function (ch) {
      if (ch === '.') { var dot = document.createElement('span'); dot.className = 'dot'; dot.textContent = '.'; el.appendChild(dot); return; }
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

  /* ── Journey path: fat dashed line that draws in as you scroll ── */
  var SVGNS = 'http://www.w3.org/2000/svg';
  var journey, basePath, donePath, clipRect, dots = [], pathH = 0;
  var MILESTONES = ['.mission', '.aud', '.impact', '.insights', '.news', '.cta'];

  function buildJourney() {
    if (!main) return;
    main.style.position = 'relative';
    if (journey) journey.remove();
    dots = [];
    pathH = main.offsetHeight;
    var W = window.innerWidth <= 900 ? 40 : 72;
    var midX = W / 2;
    var amp = W * 0.30;

    journey = document.createElementNS(SVGNS, 'svg');
    journey.setAttribute('class', 'journey');
    journey.setAttribute('viewBox', '0 0 ' + W + ' ' + pathH);
    journey.setAttribute('preserveAspectRatio', 'none');
    journey.setAttribute('width', W);
    journey.setAttribute('height', pathH);
    journey.style.width = W + 'px';

    // gentle vertical wave
    var d = 'M ' + midX + ' 0';
    var step = 130;
    for (var y = step; y <= pathH; y += step) {
      var x = midX + amp * Math.sin(y / 260);
      var cy = y - step / 2;
      var cx = midX + amp * Math.sin((y - step) / 260);
      d += ' Q ' + cx.toFixed(1) + ' ' + cy.toFixed(1) + ' ' + x.toFixed(1) + ' ' + y.toFixed(1);
    }

    var clipId = 'journeyClip';
    var defs = document.createElementNS(SVGNS, 'defs');
    var clip = document.createElementNS(SVGNS, 'clipPath');
    clip.setAttribute('id', clipId);
    clip.setAttribute('clipPathUnits', 'userSpaceOnUse');
    clipRect = document.createElementNS(SVGNS, 'rect');
    clipRect.setAttribute('x', '0'); clipRect.setAttribute('y', '0');
    clipRect.setAttribute('width', String(W)); clipRect.setAttribute('height', '0');
    clip.appendChild(clipRect); defs.appendChild(clip); journey.appendChild(defs);

    basePath = document.createElementNS(SVGNS, 'path');
    basePath.setAttribute('class', 'journey__base'); basePath.setAttribute('d', d);
    journey.appendChild(basePath);

    donePath = document.createElementNS(SVGNS, 'path');
    donePath.setAttribute('class', 'journey__done'); donePath.setAttribute('d', d);
    donePath.setAttribute('clip-path', 'url(#' + clipId + ')');
    journey.appendChild(donePath);

    // milestone dots at each section's start
    MILESTONES.forEach(function (sel) {
      var el = document.querySelector(sel);
      if (!el) return;
      var y = el.offsetTop + Math.min(64, el.offsetHeight * 0.18);
      var x = midX + amp * Math.sin(y / 260);
      var c = document.createElementNS(SVGNS, 'circle');
      c.setAttribute('class', 'journey__dot');
      c.setAttribute('cx', x.toFixed(1)); c.setAttribute('cy', y.toFixed(1)); c.setAttribute('r', '6');
      journey.appendChild(c);
      dots.push({ el: c, y: y });
    });

    main.insertBefore(journey, main.firstChild);
  }

  function update() {
    var docEl = document.documentElement;
    var top = window.scrollY || docEl.scrollTop || 0;
    var max = docEl.scrollHeight - docEl.clientHeight;
    if (progress) progress.style.width = (max > 0 ? (top / max) * 100 : 0) + '%';
    if (nav) nav.classList.toggle('is-stuck', top > 40);

    if (clipRect && pathH) {
      var mainTop = main.getBoundingClientRect().top + top;
      var drawn = top + window.innerHeight * 0.58 - mainTop;
      drawn = Math.max(0, Math.min(pathH, drawn));
      clipRect.setAttribute('height', drawn.toFixed(0));
      dots.forEach(function (d) { d.el.classList.toggle('is-done', d.y <= drawn); });
    }
  }

  // Hero parallax (content drifts slower than scroll)
  var heroInner = document.querySelector('.hero__inner');
  function parallax() {
    if (reduce || !heroInner) return;
    var y = window.scrollY || 0;
    if (y < window.innerHeight) heroInner.style.transform = 'translateY(' + (y * 0.18).toFixed(1) + 'px)';
  }

  window.addEventListener('scroll', function () { update(); parallax(); }, { passive: true });
  window.addEventListener('load', function () { if (!reduce) buildJourney(); update(); });
  var rt;
  window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { if (!reduce) buildJourney(); update(); }, 200); });
  if (!reduce) { buildJourney(); }
  update();

  /* Smooth anchor scrolling */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href'); if (id.length < 2) return;
      var t = document.querySelector(id); if (!t) return;
      e.preventDefault(); t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    });
  });
})();
