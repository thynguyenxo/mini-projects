import renderAboutUs from './about';

function createHomePage() {
  // create and append homepage element
  const home = document.createElement('div');
  home.classList.add('home');

  const hgroup = document.createElement('hgroup');
  home.appendChild(hgroup);

  const h1 = document.createElement('h1');
  h1.setAttribute('id', 'title');
  h1.textContent = 'Restauri Gastronomy';
  hgroup.appendChild(h1);

  const p = document.createElement('p');
  p.setAttribute('id', 'copy-text');
  p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus ullam! Similique, ut quo.';
  hgroup.appendChild(p);

  const button = document.createElement('button');
  button.textContent = 'Read More';
  button.addEventListener('click', () => {
    renderAboutUs();
  });
  hgroup.appendChild(button);

  const image = document.createElement('img');
  image.setAttribute('id', 'main-img');
  image.src = 'https://images.unsplash.com/photo-1675670715799-79fe208c6811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80';
  home.appendChild(image);

  return home;
}

function renderHomePage() {
  const main = document.querySelector('.content');
  main.textContent = '';
  main.appendChild(createHomePage());
}

export default renderHomePage;
