import { similarUser } from './data.js';
import {renderFullSizePhoto} from './fullPhoto.js';

const userRandom = document.querySelector('.pictures');
userRandom.classList.remove('visually-hidden');

userRandom.querySelector('.pictures__title').classList.remove('visually-hidden');
const similarUserTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderPhotos = (similarUsers) => {
  const similarListFragment = document.createDocumentFragment();
  similarUsers.forEach(({ url, like, comments }) => {
    const userElement = similarUserTemplate.cloneNode(true);
    userElement.querySelector('.picture__img').src = url;
    userElement.querySelector('.picture__likes').textContent = like;
    userElement.querySelector('.picture__comments').textContent = comments.length;
    const openFullSize = () => userElement.addEventListener(
      'click', renderFullSizePhoto(similarUser));
    userElement.addEventListener('click', openFullSize);
    similarListFragment.appendChild(userElement);
  });
  userRandom.appendChild(similarListFragment);
};

export { renderPhotos };
