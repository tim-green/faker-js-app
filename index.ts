import './styles.css';

import { faker, fakerEN_AU } from '@faker-js/faker';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.refresh') as HTMLButtonElement;
  button.addEventListener('click', refreshPage);

  function refreshPage() {
      location.reload();
  }
});

const appDiv: HTMLElement = document.querySelector('#app');
for (const faker of [fakerEN_AU]) {
  const fullName = faker.person.fullName();
  appDiv.innerHTML += `
  <div class="container">
      <div class="card">
        <div class="card__image">
          <img src="${faker.image.url()}" alt="Background image"/>
        </div>
        <div class="card__profile">
          <img src="${faker.image.avatar()}" alt="Avatar image"/>
         
        </div>
        <div class="card__body">
          <h2>${faker.person.firstName()} ${faker.person.lastName()}</h2>
          <p class="fTitle">Address</p>
          <p>${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state()}</p>
          <p class="fTitle">Phone</p>
          <p>${faker.phone.number()}</p>
          <p class="fTitle">Job Type</p>
          <p>${faker.person.jobType()}</p>
          <p class="fTitle">Job Title</p>
          <p>${faker.person.jobTitle()}</p>

          <button class="button refresh">Refresh Data</button>
        </div>  
        
      </div>
    </div>
`;
}
