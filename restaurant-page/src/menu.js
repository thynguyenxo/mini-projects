function createMenuHeader() {
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('header');

  const header = document.createElement('h1');
  header.textContent = 'Menu';
  headerContainer.appendChild(header);

  const subheader = document.createElement('p');
  subheader.classList.add('subheader');
  subheader.textContent = 'Valid for Summer, 2023';
  headerContainer.appendChild(subheader);

  const menuDescription = document.createElement('p');
  menuDescription.classList.add('menu-description');
  menuDescription.textContent = 'We\'re serving a multi-course dining experience where you choose three of the courses (and we like to surprise you with several others).';
  headerContainer.appendChild(menuDescription);

  const price = document.createElement('p');
  price.classList.add('price');
  price.textContent = '$150';
  headerContainer.appendChild(price);

  return headerContainer;
}

function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const appetizerDiv = document.createElement('div');
  appetizerDiv.classList.add('menu-div');
  menu.appendChild(appetizerDiv);

  const maincourseDiv = document.createElement('div');
  maincourseDiv.classList.add('menu-div');
  menu.appendChild(maincourseDiv);

  const dessertDiv = document.createElement('div');
  dessertDiv.classList.add('menu-div');
  menu.appendChild(dessertDiv);

  appetizerDiv.appendChild(addMenuTitle('Appetizer'));
  // append appetizer items
  appetizerDiv.appendChild(addMenuItem('Sea bream', 'leeks, geoduck, dashi'));
  appetizerDiv.appendChild(addMenuItem('Artichoke', 'wildflower, spinach, walnut'));
  appetizerDiv.appendChild(addMenuItem('Venison', 'brassicas, alliums, miso'));

  maincourseDiv.appendChild(addMenuTitle('Main Courses'));
  // append main course items
  maincourseDiv.appendChild(addMenuItem('Halibut', 'asparagus, kasu butter, nori'));
  maincourseDiv.appendChild(addMenuItem('Mushroom Teriyaki', 'Tsuyahime rice, spruce, pickles'));
  maincourseDiv.appendChild(addMenuItem('Coulotte', 'kosho, carrot, black pepper'));

  dessertDiv.appendChild(addMenuTitle('Desserts'));
  // append beverages and dessert items
  dessertDiv.appendChild(addMenuItem('Smoked cacao', 'nougatine, milk ice cream'));
  dessertDiv.appendChild(addMenuItem('Strawberry', 'rhubarb, white chocolate, kasu'));
  dessertDiv.appendChild(addMenuItem('Dried persimmon', 'devonshire cream, vermouth, yuzu'));

  return menu;
}

function addMenuTitle(title) {
  const menuTitle = document.createElement('h2');
  menuTitle.classList.add('div-title');
  menuTitle.textContent = title;

  return menuTitle;
}

function addMenuItem(name, description) {
  const item = document.createElement('div');
  item.classList.add('menu-item');

  const itemName = document.createElement('h3');
  itemName.textContent = name;
  item.appendChild(itemName);

  const itemDescription = document.createElement('p');
  itemDescription.textContent = description;
  item.appendChild(itemDescription);

  return item;
}

function renderMenuPage() {
  const main = document.querySelector('.content');
  main.textContent = '';
  main.appendChild(createMenuHeader());
  main.appendChild(createMenu());
}

export default renderMenuPage;
