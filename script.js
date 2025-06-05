// Reindirizza alla login se l'utente non è loggato
if (!localStorage.getItem('isLoggedIn')) {
  window.location.href = 'login.html';
}

    // Funzione per alternare la visibilità del menu
    function toggleMenu() {
      const menu = document.getElementById('menu');
      menu.classList.toggle('active');
    }

    // Funzione per gestire il login/logout
    document.addEventListener('DOMContentLoaded', () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const loginLogoutLink = document.getElementById('login-logout');

      if (isLoggedIn) {
        loginLogoutLink.textContent = 'Logout';
        loginLogoutLink.href = '#';
        loginLogoutLink.addEventListener('click', () => {
          localStorage.setItem('isLoggedIn', 'false');
          window.location.href = 'login.html';
        });
      } else {
        loginLogoutLink.textContent = 'Login';
        loginLogoutLink.href = 'login.html';
      }
    });

// Esegui il resto solo dopo che il DOM è stato caricato
document.addEventListener('DOMContentLoaded', () => {
  // Mostra email utente (se salvata)
  const utenteEmail = document.getElementById('utente-email');
  const utente = localStorage.getItem('loggedUser');
  if (utenteEmail && utente) {
    utenteEmail.textContent = utente;
  }

  // Logout
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('loggedUser');
      window.location.href = 'login.html';
    });
  }

  // Form investitori
  const investForm = document.getElementById('invest-form');
  const investStatus = document.getElementById('invest-status');

  if (investForm && investStatus) {
    investForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = investForm.name.value.trim();
      const email = investForm.email.value.trim();
      const message = investForm.message.value.trim();

      if (!name || !email || !message) {
        investStatus.style.color = '#f04e4e';
        investStatus.textContent = 'Compila tutti i campi.';
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        investStatus.style.color = '#f04e4e';
        investStatus.textContent = 'Email non valida.';
        return;
      }

      investStatus.style.color = 'limegreen';
      investStatus.textContent = 'Richiesta inviata! Ti contatteremo presto.';
      investForm.reset();
    });
  }
});

// Apertura modale
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = 'block';
}

// Chiusura modale
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = 'none';
}

// Chiudi modale cliccando fuori dalla finestra
window.onclick = function (event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};

// Chiudi modale premendo ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal').forEach(modal => {
      modal.style.display = 'none';
    });
  }
});


  window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero-logo');
    if (window.scrollY > 60) {
      hero.classList.add('hide');
    } else {
      hero.classList.remove('hide');
    }
  });


  document.getElementById('dropdown-logout').addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedUser');
    window.location.href = 'login.html';
  });