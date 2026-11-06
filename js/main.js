/* Dark mode toggle: remembers the choice, defaults to the system setting. */
(function () {
  var root = document.documentElement;
  var button = document.getElementById('theme-toggle');
  if (!button) return;

  function systemDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function apply(theme) {
    root.setAttribute('data-theme', theme);
    var dark = theme === 'dark';
    button.setAttribute('aria-pressed', String(dark));
    button.textContent = dark ? '☀️ Light mode' : '🌙 Dark mode';
  }

  var saved = null;
  try { saved = localStorage.getItem('portfolio-theme'); } catch (e) {}
  apply(saved || (systemDark() ? 'dark' : 'light'));

  button.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem('portfolio-theme', next); } catch (e) {}
  });
})();

/* Project filter: show only the cards that match the pressed button. */
(function () {
  var buttons = document.querySelectorAll('.filters button');
  var cards = document.querySelectorAll('#cards .card');
  var status = document.getElementById('filter-status');
  if (!buttons.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');
      var shown = 0;
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      cards.forEach(function (card) {
        var match = filter === 'all' || card.getAttribute('data-category').split(' ').indexOf(filter) !== -1;
        card.hidden = !match;
        if (match) shown += 1;
      });
      status.textContent = 'Showing ' + shown + (shown === 1 ? ' project' : ' projects');
    });
  });
})();
