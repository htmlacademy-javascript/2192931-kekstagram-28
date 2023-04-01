import {getRandomArrayElement, getRandomInteger} from './util.js';

const DESCRIPTION = [
  'Фотография парка',
  'Указатель на пляж',
  'Вид моря с берега',
  'Красивый фотограф',
  'Веселый завтрак',
  'Ламборджини',
  'Клубника в тарелке',
  'Ягодный пунш',
  'Кукурузник над пляжем',
  'Полка под обувь',
  'Заросли на берегу',
  'Авто Ауди',
  'Красная рыба',
  'Кот-бутерброд',
  'Забавные тапки',
  'Над облаками',
  'Оркестр',
  'Ретро-авто',
  'Ночной свет',
  'Пальмы на фоне ночного неба',
  'Блюда рис с овощами',
  'Закат',
  'Краб',
  'Рок-концерт',
  'Малопроходимые дороги',
];

const COMMENT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME = [
  'Иван Прохоров',
  'Алексей Борзов',
  'Борис Глымов',
  'Александр Ковалевский',
  'Джек Рассел',
  'Рассел Уэстбрук',
  'Дмитрий Хохлов',
  'Леброн Джеймс',
];

const SIMILAR_USER_COUNT = 25;
const MIN_COMMENT_ID = 1;
const MAX_COMMENT_ID = 500;
const MIN_COMMENT_LIKE = 1;
const MAX_COMMENT_LIKE = 5000;
const MIN_COMMENT_AVATAR = 1;
const MAX_COMMENT_AVATAR = 6;
const MIN_COMMENT_PHOTO = 1;
const MAX_COMMENT_PHOTO = 25;
const createDataPhotos = () => {
  const id = getRandomInteger(MIN_COMMENT_ID, MAX_COMMENT_ID);
  return {
    url: `photos/${getRandomInteger(MIN_COMMENT_PHOTO, MAX_COMMENT_PHOTO)}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    like: getRandomInteger(MIN_COMMENT_LIKE, MAX_COMMENT_LIKE),
    comments: [
      {
        id: `${id}`,
        avatar: `img/avatar-${getRandomInteger(MIN_COMMENT_AVATAR, MAX_COMMENT_AVATAR)}.svg`,
        message: getRandomArrayElement(COMMENT),
        name: getRandomArrayElement(NAME),
      },
    ]
  };
};

const similarUser = Array.from({length: SIMILAR_USER_COUNT}, createDataPhotos);


export{similarUser};

