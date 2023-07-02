function createContact() {
  const info = document.createElement('div');
  info.classList.add('info');

  const address = document.createElement('p');
  address.textContent = '123 Main Street';

  const phone = document.createElement('p');
  phone.textContent = '555-555-5555';

  info.appendChild(address);
  info.appendChild(phone);

  const openingHourTitle = document.createElement('h3');
  openingHourTitle.textContent = 'Opening Hours';

  const weekDay = document.createElement('p');
  weekDay.textContent = 'Sunday - Wednesday';
  const weekDayHour = document.createElement('p');
  weekDayHour.classList.add('opening-hours');
  weekDayHour.textContent = '5:00 PM - 10:00 PM';

  const weekEnd = document.createElement('p');
  weekEnd.textContent = 'Thursday - Saturday';
  const weekEndHour = document.createElement('p');
  weekEndHour.classList.add('opening-hours');
  weekEndHour.textContent = '5:00 PM - midnight';

  info.appendChild(openingHourTitle);
  info.appendChild(weekDay);
  info.appendChild(weekDayHour);
  info.appendChild(weekEnd);
  info.appendChild(weekEndHour);

  return info;
}

function renderContactPage() {
  const main = document.querySelector('.content');
  main.textContent = '';

  const header = document.createElement('h1');
  header.textContent = 'Contact us';
  main.appendChild(header);

  main.appendChild(createContact());
}

export default renderContactPage;
