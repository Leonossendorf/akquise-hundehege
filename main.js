// ---------- Daten: Fotos von hundehege.com (Rubrik „Referenzen") ----------
const AREAS = {
  stein: { name: 'Naturstein & Pflaster', photos: [
    ['img/hero/mauer-1600.jpg', 'img/hero/mauer-960.jpg', 'Natursteinmauer mit Sandsteinabdeckung entlang eines gepflasterten Weges'],
    ['img/pflasterarbeiten6.jpg', 'img/pflasterarbeiten6-s.jpg', 'Neu gepflasterter Parkplatz vor einem Gebäude'],
    ['img/pflasterarbeiten1.jpg', 'img/pflasterarbeiten1-s.jpg', 'Terrasse mit Natursteinpflaster'],
  ] },
  garten: { name: 'Gärten & Grünanlagen', photos: [
    ['img/zaeune2.jpg', 'img/zaeune2-s.jpg', 'Holzpergolen und Sichtschutz auf einer gepflasterten Terrasse'],
    ['img/naturstein5.jpg', 'img/naturstein5-s.jpg', 'Baumscheibe mit Natursteinkranz und Findlingen im Rasen'],
    ['img/zauene3.jpg', 'img/zauene3-s.jpg', 'Pergola aus Holz und Stahl am Hauseingang'],
  ] },
  wasser: { name: 'Wasser im Garten', photos: [
    ['img/hero/wasser-1200.jpg', 'img/hero/wasser-720.jpg', 'Wasserauslauf aus Stein über einem Wasserbecken'],
    ['img/teichbau4.jpg', 'img/teichbau4-s.jpg', 'Pergola, Pflasterweg und Wasserbecken in einer Außenanlage'],
    ['img/teichbau5.jpg', 'img/teichbau5-s.jpg', 'Steg zwischen zwei runden Wasserbecken'],
  ] },
  spiel: { name: 'Spiel & Sport', photos: [
    ['img/hero/spiel-1200.jpg', 'img/hero/spiel-720.jpg', 'Spielturm aus Holz mit Rutsche und Kletternetz auf einer Sandfläche'],
    ['img/spielplatz5.jpg', 'img/spielplatz5-s.jpg', 'Sandspielbereich mit Elementen aus Rundholz'],
    ['img/spielplatz4.jpg', 'img/spielplatz4-s.jpg', 'Spielhaus aus Holz mit Kletternetz und Leiter'],
  ] },
  erde: { name: 'Erd- & Tiefbau', photos: [
    ['img/erdarbeiten1.jpg', 'img/erdarbeiten1-s.jpg', 'Bagger und Lkw beim Bodenaushub'],
    ['img/tiefbau5.jpg', 'img/tiefbau5-s.jpg', 'Schachtring auf einer Tiefbaustelle, dahinter ein Bagger'],
    ['img/erdarbeiten5.jpg', 'img/erdarbeiten5-s.jpg', 'Firmenfahrzeuge von Hundehege auf der Baustelle'],
  ] },
};

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

const mqWide = matchMedia('(min-width: 761px)');
const mqHover = matchMedia('(hover: hover) and (pointer: fine)');
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

// ---------- Bildwechsel (Bühne und Handy-Ansicht) ----------
function setImage(frame, src, alt) {
  const on = $('.stage-img.is-on', frame);
  const off = $$('.stage-img', frame).find((i) => i !== on);
  if (on && on.getAttribute('src') === src) return;
  const swap = () => {
    off.alt = alt; off.removeAttribute('aria-hidden'); off.classList.add('is-on');
    if (on) { on.classList.remove('is-on'); on.setAttribute('aria-hidden', 'true'); on.alt = ''; }
  };
  off.src = src;
  (off.decode ? off.decode() : Promise.resolve()).then(swap, swap);
}

function buildMedia(box) {
  box.innerHTML = `<div class="stage-frame"><img class="stage-img" alt=""><img class="stage-img" alt="" aria-hidden="true"></div>
    <div class="stage-thumbs" role="group" aria-label="Fotos aus diesem Bereich"></div><p class="stage-cap"></p>`;
}

const current = { area: null, photo: {} };

function showPhoto(box, area, i) {
  const p = AREAS[area].photos[i];
  current.photo[area] = i;
  setImage($('.stage-frame', box), p[0], p[2]);
  $('.stage-cap', box).textContent = p[2];
  const thumbs = $('.stage-thumbs', box);
  if (thumbs.dataset.area !== area) {
    thumbs.dataset.area = area;
    thumbs.innerHTML = AREAS[area].photos.map((ph, n) =>
      `<button type="button" class="thumb" data-i="${n}" aria-label="Foto ${n + 1}: ${ph[2]}"><img src="${ph[1]}" alt="" loading="lazy"></button>`).join('');
    $$('.thumb', thumbs).forEach((b) => b.addEventListener('click', () => showPhoto(box, area, +b.dataset.i)));
  }
  $$('.thumb', thumbs).forEach((b) => b.setAttribute('aria-pressed', String(+b.dataset.i === i)));
}

// ---------- Leistungsbereiche ----------
const items = $$('.lz-item');
const stage = $('.lz-stage');

function activate(area, { toggle = false } = {}) {
  const item = items.find((it) => it.dataset.area === area);
  if (!item) return;
  const isOpen = item.classList.contains('is-active');
  if (toggle && isOpen && !mqWide.matches) { // auf dem Handy wieder zuklappen
    item.classList.remove('is-active');
    $('.lz-btn', item).setAttribute('aria-expanded', 'false');
    current.area = null;
    return;
  }
  if (isOpen && current.area === area) return;
  items.forEach((it) => {
    const on = it === item;
    it.classList.toggle('is-active', on);
    $('.lz-btn', it).setAttribute('aria-expanded', String(on));
  });
  current.area = area;
  const i = current.photo[area] || 0;
  if (mqWide.matches) {
    $('.stage-area', stage).textContent = AREAS[area].name;
    showPhoto(stage, area, i);
  } else {
    const box = $('.lz-media', item);
    if (!box.firstChild) buildMedia(box);
    showPhoto(box, area, i);
  }
}

items.forEach((it) => {
  const btn = $('.lz-btn', it);
  let t;
  btn.addEventListener('click', () => activate(it.dataset.area, { toggle: true }));
  btn.addEventListener('mouseenter', () => {
    if (!mqHover.matches || !mqWide.matches) return;
    t = setTimeout(() => activate(it.dataset.area), 110);
  });
  btn.addEventListener('mouseleave', () => clearTimeout(t));
});

mqWide.addEventListener('change', () => { const a = current.area || 'stein'; current.area = null; activate(a); });
activate('stein');

// Einstiege aus dem Hero und andere Links auf einen Bereich
$$('a[data-area]').forEach((a) => a.addEventListener('click', (e) => {
  e.preventDefault();
  const list = $('.lz-list');
  list.classList.add('no-anim');
  activate(a.dataset.area);
  requestAnimationFrame(() => {
    list.classList.remove('no-anim');
    const target = mqWide.matches ? $('.lz') : items.find((it) => it.dataset.area === a.dataset.area);
    target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  });
  history.replaceState(null, '', '#leistungen');
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
filter('alle');
filterBtns.forEach((b) => b.addEventListener('click', () => filter(b.dataset.f)));
$$('a[data-filter]').forEach((a) => a.addEventListener('click', () => filter(a.dataset.filter)));

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

// „Projekt besprechen" aus einem Bereich: Bereich im Formular vormerken
$$('a[data-topic]').forEach((a) => a.addEventListener('click', () => {
  $('#more').open = true;
  $$('#topics input').forEach((i) => (i.checked = i.value === a.dataset.topic));
}));

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
