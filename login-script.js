document.addEventListener('DOMContentLoaded', () => {
  // === LOGIN CHECK ===
  if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html';
    return;
  }

  // === LOGOUT ===
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', handleLogout);
  }

  // === FORM INVESTITORI ===
  const investForm = document.getElementById('invest-form');
  const investStatus = document.getElementById('invest-status');

  if (investForm && investStatus) {
    investForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('invest-name').value.trim();
      const email = document.getElementById('invest-email').value.trim();
      const message = document.getElementById('invest-message').value.trim();

      if (!name || !email || !message) {
        showStatus(investStatus, 'Per favore compila tutti i campi.', 'red');
        return;
      }

      if (!isValidEmail(email)) {
        showStatus(investStatus, 'Email non valida.', 'red');
        return;
      }

      showStatus(investStatus, 'Richiesta inviata con successo! Ti contatteremo presto.', 'limegreen');
      investForm.reset();

      setTimeout(() => (investStatus.textContent = ''), 5000);
    });
  }

  // === FUNZIONI UTILI ===
  function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedUser');
    window.location.href = 'login.html';
  }

  function showStatus(element, message, color = '#ccc') {
    element.style.color = color;
    element.textContent = message;
  }

  function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
});
