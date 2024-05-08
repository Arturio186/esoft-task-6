//---------------------------------------------------------------------------------
//Задание 5: Работа с Indexed Access Types и Mapped Types
//Цель: Создать утилиты для работы с объектами и их ключами.

// Определите интерфейс для пользователя
interface User2 {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Используйте Indexed Access Types для получения типа поля name из User
type UserNameType = User2["name"];

// Создайте Mapped Type, который преобразует все поля интерфейса User в boolean. Можно воспользовать конструкцией Key in keyof
type UserFieldsToBoolean = {
  [Key in keyof User2]: boolean;
};

// Реализуйте функцию, которая принимает ключи интерфейса User и возвращает их типы
function getUserFieldType(key: keyof User2) {
  return typeof key
}

// Используйте эту функцию для получения типа поля 'age' и 'name'
const ageType = getUserFieldType("age");
const nameType = getUserFieldType("name");
console.log(ageType, nameType)
//---------------------------------------------------------------------------------
