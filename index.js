//Задача 1: Напишіть функцію, яка перевіряє, чи є задане число парним.
//Використовуйте оператор залишку від ділення для визначення, чи є число парним.

function isEvenNumber(num) {
  if(num % 2 === 0) { return true; }
  else { return false; }
}

console.log("Завдання 1 ====================================");
console.log("isEvenNumber(10)", isEvenNumber(10)); // Виведе: true
console.log("isEvenNumber(7)", isEvenNumber(7)); // Виведе: false

// Задача 2: Напишіть функцію, яка обчислює суму чисел від 1 до заданого числа. Використовуйте цикл для послідовного додавання чисел.

function calculateSum(n) {
  let sum = 0;
  let i = 0;

  while (i <= n) {
    sum = i + sum;
    i++;
  }

  return sum;
  // Ініціалізувати змінну sum зі значенням 0
  // Запустити цикл для змінної i від 1 до n
  // Додати поточне значення i до змінної sum
  // Повернути значення змінної sum
}

console.log("Завдання 2 ====================================");
console.log("calculateSum(5)", calculateSum(5)); // Виведе: 15
console.log("calculateSum(10)", calculateSum(10)); // Виведе: 55

// Задача 3: Напишіть функцію, яка перевіряє, чи є задане число простим(ділиться без остачі тільки на себе та на 1). Використовуйте цикл для перевірки ділення числа на всі можливі дільники.

function isPrimeNumber(num) {
  if ( num <= 1 ) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
    return true;
  }
}
console.log("Завдання 3 ====================================");
console.log("isPrimeNumber(7)", isPrimeNumber(7)); // Виведе: true
console.log("isPrimeNumber(10)", isPrimeNumber(10)); // Виведе: false

// Задача 4: Напишіть функцію, яка перевіряє, чи є задане число додатним. Використовуйте умовний оператор для перевірки числа.

function isPositiveNumber(num) {
  if( num >= 0) {
    return true;
  } else {
    return false;
  }
}

console.log("Завдання 4 ====================================");
console.log("isPositiveNumber(5)", isPositiveNumber(5)); // Виведе: true
console.log("isPositiveNumber(-2)", isPositiveNumber(-2)); // Виведе: false

// Задача 5: Напишіть функцію, яка перевіряє, чи є заданий рядок пустим. Використовуйте умовний оператор та властивість довжини рядка для перевірки.

function isEmptyString(str) {
  if( str === '') {
    return true;
  } else {
    return false;
  }
}

console.log("Завдання 5 ====================================");
console.log('isEmptyString("")', isEmptyString("")); // Виведе: true
console.log('isEmptyString("Hello")', isEmptyString("Hello")); // Виведе: false

// Задача 6: Напишіть функцію checkDataType, яка приймає параметр value і перевіряє його тип даних. Функція повинна використовувати оператор typeof для визначення типу значення.
// Виведіть в консоль повідомлення з результатом перевірки типу, наприклад, Значення "hello" має тип "string"

function checkDataType(value) {
  let type = typeof value;
  console.log(type);
  return type;
}

// Приклади виклику функції
console.log("Завдання 6 ====================================");
console.log("checkDataType(42)", checkDataType(42)); // Виведе: Значення "42" має тип "number".
console.log("checkDataType('Hello')", checkDataType("Hello")); // Виведе: Значення "Hello" має тип "string".
console.log("checkDataType(true)", checkDataType(true)); // Виведе: Значення "true" має тип "boolean".
console.log("checkDataType(undefined)", checkDataType(undefined)); // Виведе: Значення "undefined" має тип "undefined".

// Задача 7: Напишіть функцію findMax, яка приймає два числа num1 і num2 і повертає більше з них. Використовуйте умовний оператор if та оператор порівняння для визначення більшого числа.

function findMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Приклади виклику функції
console.log("Завдання 7 ====================================");
console.log("findMax(10, 5)", findMax(10, 5)); // Виведе: 10
console.log("findMax(8,12)", findMax(8, 12)); // Виведе: 12
console.log("findMax(7, 7)", findMax(7, 7)); // Виведе: 7

// Задача 8: Напишіть функцію getUserStatus, яка приймає вік користувача age і повертає рядок, що вказує на його статус.
// Якщо вік менше 18 років, функція повертає "Неповнолітній". Якщо вік від 18 до 65 років, функція повертає "Дорослий". Якщо вік більше або дорівнює 65 рокам, функція повертає "Пенсіонер".
// Використовуйте умовний оператор if, else if та оператори порівняння для визначення статусу користувача.

function getUserStatus(age) {
  if (age >= 18 && age <= 65) {
    return 'Дорослий';
  } else if (age > 65) {
    return 'Пенсіонер';
  } else {
    return 'Неповнолітній';
  }
}

// Приклади виклику функції
console.log("Завдання 8 ====================================");
console.log("getUserStatus(15)", getUserStatus(15)); // Виведе: "Неповнолітній"
console.log("getUserStatus(25)", getUserStatus(25)); // Виведе: "Дорослий"
console.log("getUserStatus(70)", getUserStatus(70)); // Виведе: "Пенсіонер"

// Задача 9: Напишіть функцію getDayOfWeek, яка приймає номер дня тижня dayNumber (1-7) і повертає рядок, що відповідає цьому дню тижня.
// Використовуйте конструкцію switch case для визначення дня тижня за його номером.

function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      return("Понеділок");
      break;
    case 2:
      return("Вівторок");
      break;
    case 3:
      return("Середа");
      break;
    case 4:
      return("Четвер");
      break;
    case 5:
      return("П'ятниця");
      break;
    case 6:
      return("Субота");
      break;
    case 7:
      return("Неділя");
      break;
    default:
      return("Невірний номер дня");
    }
  }

// Приклади виклику функції
console.log("Завдання 9 ====================================");
console.log("getDayOfWeek(1)", getDayOfWeek(1)); // Виведе: "Понеділок"
console.log("getDayOfWeek(3)", getDayOfWeek(3)); // Виведе: "Середа"
console.log("getDayOfWeek(6)", getDayOfWeek(6)); // Виведе: "Субота"
console.log("getDayOfWeek(8)", getDayOfWeek(8)); // Виведе: "Невірний номер дня"

// Задача 10: Напишіть функцію getVariableType, яка приймає змінну variable і повертає рядок, що відповідає типу цієї змінної. Використовуйте тернарний оператор для визначення типу змінної.

function getVariableType(variable) {
  let type = typeof variable;
  if (type === typeof 1) {
    return "Це число";
  } else if (type === typeof '1') {
    return "Це рядок";
  } else if (type === typeof true) {
    return "Це булеве значення";
  } else {
    return "Це інший тип";
  }
}

// Приклади виклику функції
console.log("Завдання 10 ====================================");
console.log("getVariableType(10)", getVariableType(10)); // Виведе: "Це число"
console.log('getVariableType("Hello")', getVariableType("Hello")); // Виведе: "Це рядок"
console.log("getVariableType(true)", getVariableType(true)); // Виведе: "Це булеве значення"
console.log("getVariableType([1, 2, 3])", getVariableType([1, 2, 3])); // Виведе: "Це інший тип"

// Задача 11:Напишіть рекурсивну функцію, яка обчислює суму чисел від 1 до заданого числа.
// Факторіал числа - це добуток всіх цілих чисел від 1 до цього числа. Наприклад, факторіал 5 (записується як 5!) дорівнює 1*2*3*4*5 = 120.

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else if (n > 1) {
    return n * factorial(n-1);
  }
}

console.log("Завдання 11 ====================================");
console.log("factorial(5)", factorial(5)); // Виведе: 120
console.log("factorial(10)", factorial(10)); // Виведе: 3628800

// Задача 12: створити функцію `makeAdder`, яка приймає число `x` і повертає нову функцію, що приймає число `y` і повертає суму `x` та `y`.
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
  // Вертаємо нову функцію, яка приймає `y`
  // Сумуємо `x` та `y` і повертаємо результат
}

let getAdder = makeAdder(5);
// Створюємо змінну getAdder якій присвоємо результат виконання функції makeAdder з аргументом 5

console.log("Завдання 12 ====================================");
console.log("getAdder(10)", getAdder(10)); // Виведе: 15
console.log("makeAdder(5)(10)", makeAdder(5)(10)); // Виведе: 15

// Задача 13: Задача: створити стрілкову функцію, яка приймає два числа і повертає їх добуток.
let multiply = (x, y) => {
  return x * y;
  // Повертаємо добуток x та y
};

console.log("Завдання 13 ====================================");
console.log("multiply(5, 3)", multiply(5, 3)); // Виведе: 15

// Задача 14: Задача: створити каріровану функцію `divide`, яка може бути викликана як `divide(x)(y)`, щоб отримати результат ділення `x` на `y`.

function divide(x) {
  return function(y) {
    return x / y;
  }
  // Повертаємо нову функцію, яка приймає `y`
  // Ділимо `x` на `y` і повертаємо результат
}

let getDivider = divide(2);
// Створюємо змінну getDivider якій присвоємо результат виконання функції divide з аргументом 2

console.log("Завдання 14 ====================================");
// Розкоментуйте після виконаня завдання
 console.log("getDivider(10)", getDivider(10)); // Виведе: 0.2
 console.log("divide(2)(10)", divide(2)(10)); // Виведе: 0.2

// Задача 15: Створити мемоізовану версію функції, яка обчислює площу квадрата на основі довжини його сторони.

function memoizedArea() {
  let cache = null;
  let result;
  
  return function(side) {
    if (side == cache) {
      return(result);
    } else {
      cache = side;
      result = side * side;
      return result;
    }
  }
}

//Створюємо змінну squareArea якій присвоємо результат виконання функції memoizedArea
let squareArea = memoizedArea();
console.log("Завдання 15 ====================================");
// Розкоментуйте після виконаня завдання
console.log("squareArea(5)", squareArea(5)); // Обчислює і виводить 25
console.log("squareArea(5)", squareArea(5)); // Виводить "Fetching from cache" і виводить 25 з кешу
console.log("squareArea(6)", squareArea(6)); // Обчислює і виводить 36
console.log("squareArea(6)", squareArea(6)); // Виводить "Fetching from cache" і виводить 36 з кешу

// Задача 16: Задача: створити функціональний вираз для обчислення кубу числа.
let cube = function (n) {
  return n ^ 3;
};

console.log("Завдання 16 ====================================");
console.log("cube(3)", cube(3)); // Виведе: 27

// Задача 17: створити дві функції, одна з яких збільшує число на 1, а інша - множить число на 2, а потім створити композицію цих функцій.
function increment(n) {
  return n + 1;
} 

function double(n) {
  return n * 2;
}

function compose(func1, func2) {
  return function(n) {
    return double(increment(n));
  }
}

let createCompose = compose(increment, double);
// Створюємо змінну createCompose якій присвоємо результат виконання функції compose з аргументами increment та double
console.log("Завдання 17 ====================================");
// Розкоментуйте після виконаня завдання
console.log("createCompose(5)", createCompose(5)); // Виведе: 12 (5+1=6, 6*2=12)
