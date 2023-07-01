function aboutUs() {
  const about = document.createElement('div');
  about.classList.add('about');

  const header = document.createElement('h1');
  header.textContent = 'About Us';
  about.appendChild(header);

  const image = document.createElement('img');
  image.setAttribute('id', 'main-img');
  image.src = 'https://images.unsplash.com/photo-1629407119384-d42320c3e576?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
  image.height = '600'; // TODO: remove this when styling
  about.appendChild(image);

  const para = document.createElement('p');
  para.textContent = 'Integer rhoncus iaculis quam sodales malesuada. Vestibulum sed diam at nisi dictum scelerisque. Sed tortor lacus, consequat eget nisl eu, blandit congue magna. Aliquam semper viverra lobortis. Vivamus placerat purus sit amet cursus pharetra. Nulla eleifend non ex vel ultricies. Donec imperdiet dolor a posuere pellentesque. Aenean eu nisi nunc. Sed et rutrum velit. Pellentesque eu ultricies libero, id rhoncus urna. Vestibulum a sem rutrum, hendrerit augue vitae, dapibus ex.Integer rhoncus iaculis quam sodales malesuada. Vestibulum sed diam at nisi dictum scelerisque. Sed tortor lacus, consequat eget nisl eu, blandit congue magna. Aliquam semper viverra lobortis. Vivamus placerat purus sit amet cursus pharetra. Nulla eleifend non ex vel ultricies. Donec imperdiet dolor a posuere pellentesque. Aenean eu nisi nunc. Sed et rutrum velit. Pellentesque eu ultricies libero, id rhoncus urna. Vestibulum a sem rutrum, hendrerit augue vitae, dapibus ex.';
  about.appendChild(para);

  return about;
}

function renderAboutUs() {
  const main = document.querySelector('.content');
  main.textContent = '';
  main.appendChild(aboutUs());
}
export default renderAboutUs;
