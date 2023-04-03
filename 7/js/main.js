import './util.js';
import './data.js';
import { similarUser } from './data.js';
import { renderPhotos } from './photos.js';
import { renderFullSizePhoto } from './fullPhoto.js';
import './key.js';

renderPhotos(similarUser);
renderFullSizePhoto(similarUser);

