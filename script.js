// Исходные данные
const rawData = [
  { length: 665, angle: 0 },
  { length: 947, angle: 90 },
  { length: 557, angle: 0 },
  { length: 1300, angle: 90 },
  { length: 2250, angle: 180 },
  { length: 2390, angle: 270 },
];

// Функция для перевода длины из мм в см
const mmToCm = (mm) => mm / 10;

// Функция для вычисления координат
const calculateCoordinates = (length, angle) => {
  const cmLength = mmToCm(length); // переводим длину из мм в см
  const radians = (angle * Math.PI) / 180; // переводим угол из градусов в радианы

  // Вычисляем координаты X и Y
  const x = cmLength * Math.cos(radians);
  const y = cmLength * Math.sin(radians);

  return { x, y };
};

// Список координат
const coordinatesList = rawData.map(({ length, angle }, index) => {
  const { x, y } = calculateCoordinates(length, angle);
  return `Точка №${index + 1} - ${x.toFixed(2)}, ${y.toFixed(2)}`;
});

// Вывод результата
console.log(coordinatesList.join("\n"));

// Ссылка на песочницу с кодом
console.log("https://playcode.io/javascript");

/** 
 * Ответ
 Точка №1 - 66.50, 0.00
Точка №2 - 0.00, 94.70
Точка №3 - 55.70, 0.00
Точка №4 - 0.00, 130.00
Точка №5 - -225.00, 0.00
Точка №6 - 0.00, -239.00
**/
