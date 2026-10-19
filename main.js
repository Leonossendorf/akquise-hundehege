// Entwurfsnotizen ein-/ausblenden
const toggle = document.querySelector('.notes-toggle');
toggle.addEventListener('click', () => {
  const hidden = document.body.classList.toggle('hide-notes');
  toggle.setAttribute('aria-pressed', String(!hidden));
  toggle.textContent = hidden ? 'Entwurfsnotizen zeigen' : 'Entwurfsnotizen ausblenden';
});

// Projektfotos (alle von hundehege.com, Rubrik „Referenzen")
const fotos = [
  ['teichbau4', 'wasser', 'Wasser', 'big', 'Pergola, Pflasterweg und Wasserbecken in einer Außenanlage'],
  ['3951', 'naturstein', 'Naturstein', '', 'Natursteinmauer mit Abdeckung entlang eines Weges'],
  ['spielplatz4', 'spiel', 'Spielplatz', '', 'Holzspielhaus mit Kletternetz und Leiter'],
  ['pflasterarbeiten6', 'pflaster', 'Parkplatz', '', 'Neu gepflasterter Parkplatz vor einem Gebäude'],
  ['zaeune2', 'zaun', 'Pergola', 'tall', 'Holzpergolen und Sichtschutz auf einer gepflasterten Terrasse'],
  ['naturstein5', 'naturstein', 'Naturstein', '', 'Baumscheibe mit Natursteinkranz und Findlingen'],
  ['teichbau1', 'wasser', 'Wasser', '', 'Wasserspeier aus Naturstein über einem Becken'],
  ['erdarbeiten1', 'erde', 'Erdarbeiten', '', 'Bagger und Lkw beim Bodenaushub'],
  ['spielplatz5', 'spiel', 'Spielplatz', 'big', 'Sandspielbereich mit Holzelementen'],
  ['3952', 'naturstein', 'Naturstein', '', 'Bruchsteinmauer mit Sandsteinabdeckung'],
  ['pflasterarbeiten1', 'pflaster', 'Pflaster', '', 'Terrasse mit Natursteinpflaster'],
  ['tiefbau3', 'tief', 'Tiefbau', '', 'Rotationslaser auf einer Tiefbaustelle'],
  ['zaeune1', 'zaun', 'Zaun', '', 'Holzgeländer an einer Gartenterrasse'],
  ['teichbau3', 'wasser', 'Wasser', '', 'Ovales Wasserbecken mit Geländer'],
  ['erdarbeiten2', 'erde', 'Erdarbeiten', '', 'Baggerschaufel beim Verteilen von Boden'],
  ['3954', 'naturstein', 'Naturstein', '', 'Natursteinmauer, Detail'],
  ['spielplatz1', 'spiel', 'Spielplatz', '', 'Spielturm mit Rutsche auf Sandfläche'],
  ['tiefbau5', 'tief', 'Tiefbau', '', 'Schachtring und Bagger auf einer Baustelle'],
  ['pflasterarbeiten2', 'pflaster', 'Pflaster', '', 'Rotes Klinkerpflaster, Detail'],
  ['zauene3', 'zaun', 'Pergola', '', 'Pergola aus Holz und Stahl am Hauseingang'],
  ['teichbau2', 'wasser', 'Wasser', '', 'Wasserbecken mit Kiesboden'],
  ['naturstein6', 'naturstein', 'Naturstein', '', 'Trockenmauer mit Bepflanzung'],
  ['tiefbau1', 'tief', 'Tiefbau', '', 'Schachtbauwerk in der Baugrube'],
  ['erdarbeiten3', 'erde', 'Erdarbeiten', 'tall', 'Planierte Trasse, von oben'],
  ['erdarbeiten5', 'erde', 'Maschinen', '', 'Firmenfahrzeuge auf der Baustelle'],
  ['zauene4', 'zaun', 'Zaun', '', 'Stabgitterzaun mit Tor'],
  ['3953', 'naturstein', 'Naturstein', '', 'Mauer mit Sandsteinabdeckung'],
  ['teichbau5', 'wasser', 'Wasser', '', 'Steg zwischen zwei Wasserbecken'],
];
const grid = document.getElementById('grid');
grid.innerHTML = fotos.map(([f, cat, label, size, alt]) =>
  `<button type="button" class="tile ${size}" data-cat="${cat}" data-src="img/${f}.jpg" data-alt="${alt}">
     <img src="img/${f}${size === 'big' ? '' : '-s'}.jpg" alt="${alt}" loading="lazy"><span>${label}</span>
   </button>`).join('');

const buttons = document.querySelectorAll('.filters button');
function filter(f) {
  buttons.forEach((b) => b.classList.toggle('on', b.dataset.f === f));
  grid.querySelectorAll('.tile').forEach((t) => (t.hidden = f !== 'alle' && t.dataset.cat !== f));
}
buttons.forEach((b) => b.addEventListener('click', () => filter(b.dataset.f)));
document.querySelectorAll('.lv-link').forEach((a) => a.addEventListener('click', () => filter(a.dataset.filter)));

// Lightbox
const lb = document.getElementById('lightbox');
grid.addEventListener('click', (e) => {
  const t = e.target.closest('.tile');
  if (!t) return;
  lb.querySelector('img').src = t.dataset.src;
  lb.querySelector('img').alt = t.dataset.alt;
  lb.querySelector('.lb-cap').textContent = t.dataset.alt;
  lb.showModal();
});
lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });

// Formulare: im Entwurf wird nichts verschickt
document.querySelectorAll('form.form').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const s = form.querySelector('.form-status');
    s.classList.add('show');
    s.textContent = form.dataset.kind === 'bewerbung'
      ? 'Das ist ein Entwurf, deshalb wurde nichts verschickt. In der fertigen Seite landet die Kurzbewerbung direkt bei Hundehege. Echte Bewerbungen bitte an mail@hundehege.com oder 02553 3630.'
      : 'Das ist ein Entwurf, deshalb wurde nichts verschickt. In der fertigen Seite kommt die Anfrage mit Objektart, Leistung und Zeitraum bei Hundehege an. Echte Anfragen: 02553 3630.';
  });
});

// Sanftes Einblenden
const io = 'IntersectionObserver' in window && new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { rootMargin: '0px 0px -8% 0px' });
if (io) document.querySelectorAll('.who article, .lv-list li').forEach((el) => { el.classList.add('reveal'); io.observe(el); });
setTimeout(() => document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in')), 3000);
