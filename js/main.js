const ID = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
];

const URL_PHOTO = [
  'photos/{{1}}.jpg',
  'photos/{{2}}.jpg',
  'photos/{{3}}.jpg',
  'photos/{{4}}.jpg',
  'photos/{{5}}.jpg',
  'photos/{{6}}.jpg',
  'photos/{{7}}.jpg',
  'photos/{{8}}.jpg',
  'photos/{{9}}.jpg',
  'photos/{{10}}.jpg',
  'photos/{{11}}.jpg',
  'photos/{{12}}.jpg',
  'photos/{{13}}.jpg',
  'photos/{{14}}.jpg',
  'photos/{{15}}.jpg',
  'photos/{{16}}.jpg',
  'photos/{{17}}.jpg',
  'photos/{{18}}.jpg',
  'photos/{{19}}.jpg',
  'photos/{{20}}.jpg',
  'photos/{{21}}.jpg',
  'photos/{{22}}.jpg',
  'photos/{{23}}.jpg',
  'photos/{{24}}.jpg',
  'photos/{{25}}.jpg',
];

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

const LIKES = [
  '27',
  '165',
  '198',
  '34',
  '199',
  '38',
  '200',
  '44',
  '155',
  '188',
  '177',
  '132',
  '100',
  '101',
  '102',
  '119',
  '56',
  '76',
  '105',
  '196',
  '187',
  '18',
  '19',
  '108',
  '123',
  '125',
];

const COMMENTS = [
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

const AVATAR = [
  'img/avatar-{{1}}.svg',
  'img/avatar-{{2}}.svg',
  'img/avatar-{{3}}.svg',
  'img/avatar-{{4}}.svg',
  'img/avatar-{{5}}.svg',
  'img/avatar-{{6}}.svg',
  'img/html-{{logo}}.svg',
  'img/icon-{{arrow}}.png',
  'img/icon-{{cross}}.svg',
  'img/icon-{{warning}}.svg',
  'img/logo-{{background-1}}.jpg',
  'img/logo-{{background-2}}.jpg',
  'img/logo-{{background-3}}.jpg',
  'img/logo-{{mask}}.png',
  'img/spinner-{{blue}}.svg',
  'img/spinner.svg',
  'img/sprite.png',
  'img/pload-button-bg.png',
  'img/pload-button.svg',
  'img/pload-default-image.jpg',
];

const SIMILAR_USER_COUNT = 7;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createUser = () => ({
  name: getRandomArrayElement(NAME),
  comment: getRandomArrayElement(COMMENTS),
  likes: getRandomArrayElement(LIKES),
  id: getRandomArrayElement(ID),
  avatar: getRandomArrayElement(AVATAR),
  url: getRandomArrayElement(URL_PHOTO),
  description: getRandomArrayElement(DESCRIPTION),
});

const similarUser = Array.from({length: SIMILAR_USER_COUNT}, createUser);

// eslint-disable-next-line no-console
console.log(similarUser);
