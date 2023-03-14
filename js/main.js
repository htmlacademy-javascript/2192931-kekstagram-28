
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

const SIMILAR_USER_COUNT = 7;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createDataPhotos = () => {
  const id = getRandomInteger(1, 500);
  return {
    id: getRandomInteger(1, 500),
    name: getRandomArrayElement(NAME),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    photo: `photos/jpg-${getRandomInteger(1, 25)}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    like: getRandomInteger(1, 5000),
    comment: getRandomArrayElement(COMMENT),
    comments: [
      {
        id: `${id}`,
        avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
        message: getRandomArrayElement(COMMENT),
        name: getRandomArrayElement(NAME),
      },
    ]
  };
};

const similarUser = Array.from({length: SIMILAR_USER_COUNT}, createDataPhotos);

// eslint-disable-next-line no-console
console.log(similarUser);
