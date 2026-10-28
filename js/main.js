(function () {
  'use strict';
  document.documentElement.classList.add('js');
  var burger = document.querySelector('.burger');
  var menu = document.getElementById('nav');
  function closeMenu() {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Ouvrir le menu');
    burger.textContent = '\u2630';
  }
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
      burger.textContent = open ? '\u00d7' : '\u2630';
    });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) { closeMenu(); burger.focus(); }
    });
  }
  var year = document.getElementById('y');
  if (year) year.textContent = new Date().getFullYear();

  var form = document.getElementById('wf');
  if (!form) return;
  var subject = document.getElementById('subject');
  function prefill() {
    if (location.hash === '#rendez-vous' && !subject.value) subject.value = 'Demande de rendez-vous';
  }
  prefill();
  window.addEventListener('hashchange', prefill);
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (id) { return document.getElementById(id).value.trim(); };
    var name = v('name'), email = v('email'), subj = v('subject'), message = v('message');
    if (!name || !subj || !message) return;
    var lines = ['Bonjour Cabinet Damien Mukesi & Associ\u00e9s,', '', 'Nom : ' + name];
    if (email) lines.push('E-mail : ' + email);
    lines.push('Objet : ' + subj, '', 'Message :', message);
    window.open('https://wa.me/' + form.dataset.whatsapp + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener,noreferrer');
  });
})();
