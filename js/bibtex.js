/* Citations remain readable and selectable without JavaScript. */
(() => {
  'use strict';

  function selectCitation(code) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(code);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  document.querySelectorAll('.bibtex').forEach((details) => {
    const button = details.querySelector('.bibtex-copy');
    const code = details.querySelector('code');
    const status = details.querySelector('.bibtex-status');
    if (!button || !code || !status) return;
    button.hidden = false;

    button.addEventListener('click', async () => {
      button.disabled = true;
      status.textContent = '';
      try {
        if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(code.textContent.trim());
        status.textContent = 'Copied!';
      } catch (_) {
        // Selecting the visible entry also works when browser permissions deny clipboard access.
        code.parentElement.focus();
        selectCitation(code);
        status.textContent = 'Citation selected. Press Ctrl+C or ⌘C, or use your device’s Copy command.';
      } finally {
        button.disabled = false;
      }
    });
    details.addEventListener('toggle', () => {
      if (!details.open) status.textContent = '';
    });
  });
})();
