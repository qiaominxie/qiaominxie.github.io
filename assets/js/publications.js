(function () {
  function initializePublicationFilters() {
    var root = document.querySelector('[data-publications]');
    if (!root) return;

    var buttons = Array.prototype.slice.call(root.querySelectorAll('[data-publication-filter]'));
    var topics = Array.prototype.slice.call(root.querySelectorAll('[data-publication-topic]'));
    var topicView = root.querySelector('[data-publication-topic-view]');
    var yearView = root.querySelector('[data-publication-year-view]');
    var status = root.querySelector('.publication-filter-status');

    function setView(filter) {
      buttons.forEach(function (button) {
        var active = button.getAttribute('data-publication-filter') === filter;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      if (filter === 'years') {
        topicView.hidden = true;
        yearView.hidden = false;
        status.textContent = 'Showing all publications by year.';
        return;
      }

      topicView.hidden = false;
      yearView.hidden = true;

      topics.forEach(function (section) {
        section.hidden = filter !== 'all' && section.getAttribute('data-publication-topic') !== filter;
      });

      var activeButton = buttons.find(function (button) {
        return button.getAttribute('data-publication-filter') === filter;
      });
      status.textContent = filter === 'all'
        ? 'Showing publications in all research topics.'
        : 'Showing publications in ' + activeButton.textContent.trim() + '.';
    }

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        setView(button.getAttribute('data-publication-filter'));
      });
    });

    root.classList.add('publications--interactive');
    setView('all');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePublicationFilters);
  } else {
    initializePublicationFilters();
  }
})();
