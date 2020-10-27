// const numbers = [1, 2, 3];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// // Функциональный forEach
// numbers.forEach(num => console.log(num));

// // numbers.forEach(function (num) {
// //   console.log(num);
// // });

// // Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
//   { name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно true, то текущий элемент (user) будет записан в результирующий массив.
// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно false, то текущий элемент (user) будет записан в результирующий массив.
// const inactiveUsers = users.filter(user => !user.isActive);
// console.log(inactiveUsers);

// const users = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле id.
// // Если оно совпадает с искомым идентификатором, то find прекратит
// // выполнение и вернет текущий элемент (user) как результат выполнения
// const user = users.find(user => user.id === '002');
// console.log(user);

// // Создадим функцию которая будет возвращать нам пользователя по id
// const getUserById = (arr, id) => arr.find(x => x.id === id);

// console.log(getUserById(users, '001'));
// console.log(getUserById(users, '003'));

// Callback-function
// const printMessage = function (message) {
//   console.log(message);
// };

// const higherOrderFunction = function (callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// higherOrderFunction(printMessage);

// const doMath = function (x, y, callback) {
//   const result = callback(x, y);
//   console.log(result);
// };

// const add = function (a, b) {
//   return a + b;
// };

// const sub = function (a, b) {
//   return a - b;
// };

// doMath(10, 5, add);
// doMath(100, 80, sub);

//map
// const numbers = [1, 2, 3];

// // const doubledMNumbers = numbers.map(function (number) {
// //   return number * 2;
// // });

// const doubledMNumbers = numbers.map(number => number * 2);

// console.log(doubledMNumbers);

// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];

// const names = users.map(user => user.name);
// console.log(names);

// const arr = Array(3)
//   .fill('')
//   .map((e, i) => ({ ['index']: i }));

// console.log(arr);