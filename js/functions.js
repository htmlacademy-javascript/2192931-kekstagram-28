// Функция, которая проверяет длину строки
const checkString = function (firstNumber, secondNumber) {
  return firstNumber.length <= secondNumber;
};

checkString('проверяемая строка', 20);

// Функция для проверки, является ли строка палиндромом
const searchWord = function (wordFirst) {
  const tempString = wordFirst.toLowerCase()
    .replaceAll(' ', '');
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
};

searchWord('топот');

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа
const extractNumber = function (string) {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }

  return parseInt(result, 10);
};

extractNumber('2023 год');

// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку
const myPadStart = function (string, minLength, pad) {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

myPadStart('1', 2, '0');
