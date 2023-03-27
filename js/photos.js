import {similarUser} from './data.js';

const userRandom = document.querySelector('.pictures');
userRandom.classList.remove('visually-hidden');

userRandom.querySelector('.pictures__title').classList.remove('visually-hidden');

const similarListElement = userRandom.querySelector('.pictures');
const similarUserTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarUsers = similarUser();

const similarListFragment = document.createDocumentFragment();

similarUsers.forEach(({url, like, comment}) => {
  const userElement = similarUserTemplate.cloneNode(true);
  userElement.querySelector('.picture__img').src = url;
  userElement.querySelector('.picture__likes').textContent = like;
  userElement.querySelector('.picture__comments').textContent = comment;
  similarListElement.appendChild(userElement);
});

similarListElement.appendChild(similarListFragment);
