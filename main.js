// ---------- Daten: Fotos von hundehege.com (Rubrik „Referenzen") ----------
const AREAS = {
  stein: {
    title: 'Naturstein & Pflaster',
    text: 'Mauern, Wege, Terrassen und Parkplätze aus Naturstein und Pflaster.',
    tags: ['Pflasterarbeiten, auch mit Naturstein', 'Natursteinmauern', 'Parkplätze'],
    photos: [
      ['img/hero/mauer-1600.jpg', 'img/hero/mauer-960.jpg', 'Natursteinmauer mit Sandsteinabdeckung entlang eines gepflasterten Weges'],
      ['img/3952.jpg', 'img/3952-s.jpg', 'Bruchsteinmauer mit Sandsteinabdeckung'],
      ['img/3953.jpg', 'img/3953-s.jpg', 'Mauer mit Sandsteinabdeckung am Weg'],
      ['img/3954.jpg', 'img/3954-s.jpg', 'Natursteinmauer, Detail'],
      ['img/naturstein6.jpg', 'img/naturstein6-s.jpg', 'Trockenmauer mit Bepflanzung'],
      ['img/pflasterarbeiten6.jpg', 'img/pflasterarbeiten6-s.jpg', 'Neu gepflasterter Parkplatz vor einem Gebäude'],
      ['img/pflasterarbeiten1.jpg', 'img/pflasterarbeiten1-s.jpg', 'Terrasse mit Natursteinpflaster'],
      ['img/pflasterarbeiten2.jpg', 'img/pflasterarbeiten2-s.jpg', 'Klinkerpflaster, Detail'],
    ],
  },
  garten: {
    title: 'Gärten & Grünanlagen',
    text: 'Gartengestaltung von der Planung bis zum letzten Pflanzloch, mit Zäunen und Pergolen.',
    tags: ['Gartengestaltung und Grünanlagen', 'Rasensaat und Bepflanzung', 'Zäune und Pergolen'],
    photos: [
      ['img/zaeune2.jpg', 'img/zaeune2-s.jpg', 'Holzpergolen und Sichtschutz auf einer gepflasterten Terrasse'],
      ['img/naturstein5.jpg', 'img/naturstein5-s.jpg', 'Baumscheibe mit Natursteinkranz und Findlingen im Rasen'],
      ['img/zauene3.jpg', 'img/zauene3-s.jpg', 'Pergola aus Holz und Stahl am Hauseingang'],
      ['img/zaeune1.jpg', 'img/zaeune1-s.jpg', 'Holzgeländer an einer Gartenterrasse'],
      ['img/zauene4.jpg', 'img/zauene4-s.jpg', 'Stabgitterzaun mit Tor'],
    ],
  },
  wasser: {
    title: 'Wasser im Garten',
    text: 'Teiche und Wasserbecken als ruhiger Mittelpunkt einer Anlage.',
    tags: ['Teichbau', 'Wasserbecken'],
    photos: [
      ['img/hero/wasser-1200.jpg', 'img/hero/wasser-720.jpg', 'Wasserauslauf aus Stein über einem Wasserbecken'],
      ['img/teichbau4.jpg', 'img/teichbau4-s.jpg', 'Pergola, Pflasterweg und Wasserbecken in einer Außenanlage'],
      ['img/teichbau5.jpg', 'img/teichbau5-s.jpg', 'Steg zwischen zwei runden Wasserbecken'],
      ['img/teichbau3.jpg', 'img/teichbau3-s.jpg', 'Ovales Wasserbecken mit Geländer'],
      ['img/teichbau2.jpg', 'img/teichbau2-s.jpg', 'Wasserbecken mit Kiesboden'],
    ],
  },
  spiel: {
    title: 'Spiel & Sport',
    text: 'Spielplätze und Sportstätten, von der Planung bis zum Bau.',
    tags: ['Spielplätze', 'Sportstättenbau'],
    photos: [
      ['img/hero/spiel-1200.jpg', 'img/hero/spiel-720.jpg', 'Spielturm aus Holz mit Rutsche und Kletternetz auf einer Sandfläche'],
      ['img/spielplatz5.jpg', 'img/spielplatz5-s.jpg', 'Sandspielbereich mit Elementen aus Rundholz'],
      ['img/spielplatz4.jpg', 'img/spielplatz4-s.jpg', 'Spielhaus aus Holz mit Kletternetz und Leiter'],
    ],
  },
  erde: {
    title: 'Erd- & Tiefbau',
    text: 'Aushub, Erdbewegung und Schachtbau mit eigenen Maschinen.',
    tags: ['Erdarbeiten', 'Tiefbau'],
    photos: [
      ['img/erdarbeiten1.jpg', 'img/erdarbeiten1-s.jpg', 'Bagger und Lkw beim Bodenaushub'],
      ['img/erdarbeiten5.jpg', 'img/erdarbeiten5-s.jpg', 'Firmenfahrzeuge von Hundehege auf der Baustelle'],
      ['img/tiefbau5.jpg', 'img/tiefbau5-s.jpg', 'Schachtring auf einer Tiefbaustelle, dahinter ein Bagger'],
      ['img/tiefbau3.jpg', 'img/tiefbau3-s.jpg', 'Rotationslaser auf einer Tiefbaustelle'],
      ['img/tiefbau1.jpg', 'img/tiefbau1-s.jpg', 'Schachtbauwerk in der Baugrube'],
      ['img/erdarbeiten2.jpg', 'img/erdarbeiten2-s.jpg', 'Baggerschaufel beim Verteilen von Boden'],
      ['img/erdarbeiten3.jpg', 'img/erdarbeiten3-s.jpg', 'Planierte Trasse, von oben'],
    ],
  },
};
const ORDER = ['stein', 'garten', 'wasser', 'spiel', 'erde'];

const GALLERY = [
  ['teichbau4', 'wasser', 'big', 'Pergola, Pflasterweg und Wasserbecken in einer Außenanlage'],
  ['3951', 'stein', '', 'Natursteinmauer mit Abdeckung entlang eines Weges'],
  ['spielplatz4', 'spiel', '', 'Spielhaus aus Holz mit Kletternetz und Leiter'],
  ['pflasterarbeiten6', 'stein', '', 'Neu gepflasterter Parkplatz vor einem Gebäude'],
  ['zaeune2', 'garten', 'tall', 'Holzpergolen und Sichtschutz auf einer gepflasterten Terrasse'],
  ['naturstein5', 'garten', '', 'Baumscheibe mit Natursteinkranz und Findlingen'],
  ['teichbau1', 'wasser', '', 'Wasserauslauf aus Stein über einem Becken'],
  ['erdarbeiten1', 'erde', '', 'Bagger und Lkw beim Bodenaushub'],
  ['spielplatz5', 'spiel', 'big', 'Sandspielbereich mit Elementen aus Rundholz'],
  ['3952', 'stein', '', 'Bruchsteinmauer mit Sandsteinabdeckung'],
  ['pflasterarbeiten1', 'stein', '', 'Terrasse mit Natursteinpflaster'],
  ['tiefbau3', 'erde', '', 'Rotationslaser auf einer Tiefbaustelle'],
  ['zaeune1', 'garten', '', 'Holzgeländer an einer Gartenterrasse'],
  ['teichbau3', 'wasser', '', 'Ovales Wasserbecken mit Geländer'],
  ['erdarbeiten2', 'erde', '', 'Baggerschaufel beim Verteilen von Boden'],
  ['3954', 'stein', '', 'Natursteinmauer, Detail'],
  ['spielplatz1', 'spiel', '', 'Spielturm mit Rutsche auf einer Sandfläche'],
  ['tiefbau5', 'erde', '', 'Schachtring und Bagger auf einer Baustelle'],
  ['pflasterarbeiten2', 'stein', '', 'Klinkerpflaster, Detail'],
  ['zauene3', 'garten', '', 'Pergola aus Holz und Stahl am Hauseingang'],
  ['teichbau2', 'wasser', '', 'Wasserbecken mit Kiesboden'],
  ['naturstein6', 'stein', '', 'Trockenmauer mit Bepflanzung'],
  ['tiefbau1', 'erde', '', 'Schachtbauwerk in der Baugrube'],
  ['erdarbeiten3', 'erde', 'tall', 'Planierte Trasse, von oben'],
  ['erdarbeiten5', 'erde', '', 'Firmenfahrzeuge auf der Baustelle'],
  ['zauene4', 'garten', '', 'Stabgitterzaun mit Tor'],
  ['3953', 'stein', '', 'Mauer mit Sandsteinabdeckung'],
  ['teichbau5', 'wasser', '', 'Steg zwischen zwei Wasserbecken'],
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Leistungen: Fotozahl auf den Karten ----------
$$('.card-count').forEach((el) => {
  const n = AREAS[el.dataset.count].photos.length;
  el.textContent = `${n} Fotos ansehen`;
});

// ---------- Projektansicht ----------
const pv = $('#pv');
const pvState = { area: null, i: 0 };

function pvShow(i) {
  const photos = AREAS[pvState.area].photos;
  pvState.i = (i + photos.length) % photos.length;
  const [src, , alt] = photos[pvState.i];
  const on = $('.pv-img.is-on', pv);
  const off = $$('.pv-img', pv).find((x) => x !== on);
  const swap = () => {
    off.alt = alt; off.removeAttribute('aria-hidden'); off.classList.add('is-on');
    on.classList.remove('is-on'); on.setAttribute('aria-hidden', 'true'); on.alt = '';
  };
  if (on.getAttribute('src') !== src) {
    off.src = src;
    (off.decode ? off.decode() : Promise.resolve()).then(swap, swap);
  }
  $('.pv-count', pv).textContent = `${pvState.i + 1} / ${photos.length}`;
  $('.pv-cap', pv).textContent = alt;
  $$('.pv-thumb', pv).forEach((t, n) => t.setAttribute('aria-current', String(n === pvState.i)));
  const cur = $$('.pv-thumb', pv)[pvState.i];
  if (cur) cur.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  const single = photos.length < 2;
  $$('.pv-nav', pv).forEach((b) => (b.hidden = single));
}

function pvFill(area) {
  const a = AREAS[area];
  pvState.area = area;
  $('#pv-title').textContent = a.title;
  $('.pv-text', pv).textContent = a.text;
  $('.pv-tags', pv).innerHTML = a.tags.map((t) => `<li>${t}</li>`).join('');
  $('.pv-thumbs', pv).innerHTML = a.photos.map((p, n) =>
    `<button type="button" class="pv-thumb" data-i="${n}" aria-label="Foto ${n + 1}: ${p[2]}"><img src="${p[1]}" alt="" loading="lazy"></button>`).join('');
  $$('.pv-thumb', pv).forEach((b) => b.addEventListener('click', () => pvShow(+b.dataset.i)));
  const next = ORDER[(ORDER.indexOf(area) + 1) % ORDER.length];
  $('#pv-nextarea b').textContent = AREAS[next].title;
  $('#pv-nextarea').dataset.next = next;
  $('#pv-talk').dataset.topic = area;
  // erstes Bild sofort setzen, ohne Überblendung vom vorherigen Bereich
  $$('.pv-img', pv).forEach((im, n) => {
    im.classList.toggle('is-on', n === 0);
    if (n === 0) { im.src = a.photos[0][0]; im.alt = a.photos[0][2]; im.removeAttribute('aria-hidden'); }
    else { im.alt = ''; im.setAttribute('aria-hidden', 'true'); }
  });
  pvShow(0);
}

function pvOpen(area) {
  pvFill(area);
  if (!pv.open) {
    pv.showModal();
    document.body.classList.add('pv-open');
  }
  const next = $('.pv-next', pv);
  (next.hidden ? $('.pv-close', pv) : next).focus();
}
pv.addEventListener('close', () => document.body.classList.remove('pv-open'));
pv.addEventListener('click', (e) => { if (e.target === pv) pv.close(); });
$('.pv-prev', pv).addEventListener('click', () => pvShow(pvState.i - 1));
$('.pv-next', pv).addEventListener('click', () => pvShow(pvState.i + 1));
$('#pv-nextarea').addEventListener('click', (e) => pvFill(e.currentTarget.dataset.next));
pv.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') { e.preventDefault(); pvShow(pvState.i - 1); }
  if (e.key === 'ArrowRight') { e.preventDefault(); pvShow(pvState.i + 1); }
});
// Wischen auf dem Bild
let sx = null;
const frame = $('.pv-frame', pv);
frame.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') sx = e.clientX; });
frame.addEventListener('pointerup', (e) => {
  if (sx === null) return;
  const dx = e.clientX - sx; sx = null;
  if (Math.abs(dx) > 40) pvShow(pvState.i + (dx < 0 ? 1 : -1));
});
frame.addEventListener('pointercancel', () => (sx = null));

$('#pv-talk').addEventListener('click', (e) => {
  e.preventDefault();
  const topic = e.currentTarget.dataset.topic;
  pv.close();
  $('#more').open = true;
  $$('#topics input').forEach((i) => (i.checked = i.value === topic));
  $('#kontakt').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
});

$$('.card').forEach((c) => c.addEventListener('click', () => pvOpen(c.dataset.area)));

// Einstiege aus dem Hero: Bereich direkt öffnen, dahinter zu den Leistungen springen
$$('a[data-area]').forEach((a) => a.addEventListener('click', (e) => {
  e.preventDefault();
  document.documentElement.style.scrollBehavior = 'auto';
  $('#leistungen').scrollIntoView();
  document.documentElement.style.scrollBehavior = '';
  pvOpen(a.dataset.area);
}));

// ---------- Galerie ----------
const grid = $('#grid');
grid.innerHTML = GALLERY.map(([f, cat, size, alt]) =>
  `<button type="button" class="tile ${size}" data-cat="${cat}" data-src="img/${f}.jpg" data-alt="${alt}" aria-label="Foto vergrößern: ${alt}">
     <img src="img/${f}${size === 'big' ? '' : '-s'}.jpg" alt="" loading="lazy"></button>`).join('');

const filterBtns = $$('.filters button');
const PREVIEW = 13; // erste Auswahl, füllt das Raster ohne Lücken
const allBtn = $('#all-photos');
let showAll = false;
function filter(f) {
  filterBtns.forEach((b) => { const on = b.dataset.f === f; b.classList.toggle('on', on); b.setAttribute('aria-pressed', String(on)); });
  $$('.tile', grid).forEach((t, n) => (t.hidden = f === 'alle' ? (!showAll && n >= PREVIEW) : t.dataset.cat !== f));
  allBtn.parentElement.hidden = f !== 'alle' || showAll;
}
allBtn.textContent = `Alle ${GALLERY.length} Fotos zeigen`;
allBtn.addEventListener('click', () => { showAll = true; filter('alle'); });
filterBtns.forEach((b) => b.addEventListener('click', () => filter(b.dataset.f)));
filter('alle');

const lb = $('#lightbox');
grid.addEventListener('click', (e) => {
  const t = e.target.closest('.tile');
  if (!t) return;
  $('img', lb).src = t.dataset.src;
  $('img', lb).alt = t.dataset.alt;
  $('.lb-cap', lb).textContent = t.dataset.alt;
  lb.showModal();
});
lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });

// ---------- Geschichte: Wörter leuchten beim Scrollen nacheinander auf ----------
const words = $$('.story-words span');
if (!reduced && words.length) {
  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = innerHeight;
    words.forEach((w) => {
      const r = w.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (vh * 0.8 - r.top) / (vh * 0.22)));
      w.style.setProperty('--o', (0.16 + 0.84 * p).toFixed(3));
    });
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', update);
  update();
}

// ---------- Weg und Medaillen: einmaliges Einblenden ----------
if (!reduced && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.3 });
  $$('.path, .ehrung').forEach((el) => { el.classList.add('armed'); io.observe(el); });
}

// ---------- Formulare: im Entwurf wird nichts verschickt ----------
$$('form.form').forEach((form) => form.addEventListener('submit', (e) => {
  e.preventDefault();
  const s = $('.form-status', form);
  s.classList.add('show');
  s.textContent = form.dataset.kind === 'bewerbung'
    ? 'Das ist ein Entwurf, deshalb wurde nichts verschickt. In der fertigen Seite landet die Kurzbewerbung direkt bei Hundehege. Echte Bewerbungen bitte an mail@hundehege.com oder 02553 3630.'
    : 'Das ist ein Entwurf, deshalb wurde nichts verschickt. In der fertigen Seite kommt Ihre Anfrage direkt bei Hundehege an. Echte Anfragen bitte unter 02553 3630.';
}));

// ---------- Menü (Handy und Tablet) ----------
const menuBtn = $('.menu-btn');
const nav = $('#nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
$$('a', nav).forEach((a) => a.addEventListener('click', () => { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }));

// ---------- Entwurfs-Hinweis ----------
const pill = $('.draft-pill');
const panel = $('#draft-panel');
pill.addEventListener('click', () => {
  const open = panel.hidden;
  panel.hidden = !open;
  pill.setAttribute('aria-expanded', String(open));
});
const notesBtn = $('.notes-toggle');
notesBtn.addEventListener('click', () => {
  const hidden = document.body.classList.toggle('hide-notes');
  notesBtn.setAttribute('aria-pressed', String(!hidden));
  notesBtn.textContent = hidden ? 'Entwurfsnotizen einblenden' : 'Entwurfsnotizen ausblenden';
});
