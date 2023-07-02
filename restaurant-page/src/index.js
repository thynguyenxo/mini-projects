import renderAboutUs from './about';
import renderHomePage from './home';
import renderMenuPage from './menu';
import renderContactPage from './contact';

function createNav() {
  const nav = document.createElement('nav');
  nav.classList.add('navbar');

  const homeButton = document.createElement('button');
  homeButton.textContent = 'Home';
  homeButton.classList.add('nav-btn');
  homeButton.addEventListener('click', () => {
    renderHomePage();
  });

  const aboutButton = document.createElement('button');
  aboutButton.textContent = 'About';
  aboutButton.classList.add('nav-btn');
  aboutButton.addEventListener('click', () => {
    renderAboutUs();
  });

  const menuButton = document.createElement('button');
  menuButton.textContent = 'Menu';
  menuButton.classList.add('nav-btn');
  menuButton.addEventListener('click', () => {
    renderMenuPage();
  });

  const contactButton = document.createElement('button');
  contactButton.textContent = 'Contact';
  contactButton.classList.add('nav-btn');
  contactButton.addEventListener('click', () => {
    renderContactPage();
  });

  // create buttons and mobile menu
  const mobileMenu = document.createElement('button');
  const buttons = [homeButton, aboutButton, menuButton, contactButton];
  mobileMenu.classList.add('nav-btn');
  mobileMenu.textContent = 'Menu';

  // hide buttons by default
  if (window.innerWidth > 800) {
    mobileMenu.style.display = 'none';
  } else {
    buttons.forEach((btn) => {
      btn.style.display = 'none';
    });

    mobileMenu.addEventListener('click', () => {
      const checkBtnHidden = buttons.some((btn) => btn.style.display === 'none');
      mobileMenu.textContent = checkBtnHidden ? 'Close' : 'Menu';
      buttons.forEach((btn) => {
        btn.style.display = checkBtnHidden ? 'block' : 'none';
      });

      // click anywhere to close menu bar
      window.onclick = function (event) {
        if (event.target !== mobileMenu) {
          if (!checkBtnHidden) {
            mobileMenu.textContent = 'Menu';
            buttons.forEach((btn) => {
              btn.style.display = 'none';
            });
          }
        }
      };
    });
  }

  nav.appendChild(homeButton);
  nav.appendChild(aboutButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);
  nav.appendChild(mobileMenu);

  return nav;
}

function createContainer() {
  const content = document.createElement('div');
  content.classList.add('content');

  return content;
}

function initializeWebsite() {
  const main = document.querySelector('main');
  main.appendChild(createNav());
  main.appendChild(createContainer());
  renderHomePage();
}

initializeWebsite();
