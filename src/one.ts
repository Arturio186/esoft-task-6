//---------------------------------------------------------------------------------
//Разминка
// Определите интерфейс для пользователя
interface User {
  id: number;
  name: string;
  email: string;
}

// Определите интерфейс для активности пользователя
interface Activity {
  userId: number;
  activity: string;
  timestamp: Date;
}

// Реализуйте функцию fetchData используя Generic. Функция должна возвращать Promise.
async function fetchData<T>(url: string): Promise<T> {
  const result = fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка получения данных!");
      }

      return response.json();
    })
    .then((data) => data as T);

  return result;
}

// Реализуйте получение данных с использованием fetch и возвращение их в формате json

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

(async () => {
  const TodoList = await fetchData<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );

  TodoList.forEach((todo) => console.log(todo.title));
})();

// Используйте Utility Types для создания Partial и Readonly версий User и Activity
type PartialUser = Partial<User>;
type ReadonlyActivity = Readonly<User>;

//Типизируйте функцию. userId - число
function getUserActivities(userId: number): Promise<Activity> {
  return fetchData<Activity>(`/api/activities/${userId}`);
}

// Используйте ReturnType для создания типа возвращаемого значения функции getUserActivities
type ActivitiesReturnType = ReturnType<typeof getUserActivities>;

// Используйте extends в условных типах для создания типа Permissions
type AdminPermissions = { canBanUser: boolean };
type BasicPermissions = { canEditProfile: boolean };
// Заполните тип. Должен выявляться на основне некоторого дженерика и опредять, какой из пермишенов выдавать: Admin или Basic.
type PERMISSIONS<T> = T extends "admin" ? AdminPermissions : BasicPermissions;

///ЧАСТЬ 2.

// Определите Type Alias для Union типа String или Number
type StringOrNumber = string | number;

// Реализуйте функцию logMessage, которая принимает StringOrNumber и не возвращает значение (void)
function logMessage(message: StringOrNumber): void {
  console.log(message);
}

// Реализуйте функцию throwError, которая никогда не возвращает управление (never)
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

// Реализуйте Type Guard для проверки, является ли значение строкой
function isString1(value: StringOrNumber): value is string {
  return typeof value === "string";
}

// Реализуйте функцию assertIsNumber, которая использует asserts для утверждения типа number
function assertIsNumber1(value: any): asserts value is number {
  if (typeof value !== "number") {
    throw new Error(`${value} не является числом`);
  }
}
// Завершите функцию processValue, используя isString и assertIsNumber
function processValue1(value: StringOrNumber) {
  if (isString1(value)) {
    console.log("Это строка: " + value.toUpperCase());
  } else {
    assertIsNumber1(value);
    console.log("Это число: " + value);
  }
}

//сделайте  Type Guard для определения, является ли значение строкой
function isString2(value): value is string {
  return typeof value === "string";
}

// создайте asserts function на число.
function assertIsNumber2(value: any): asserts value is number {
  if (typeof value !== "number") {
    throw new Error(`${value} не является числом`);
  }
}

function test(str: string) {
  assertIsNumber2(str);

  let i = 5;
}

// Использование Type Guard и Asserts
function processValue2(value: StringOrNumber) {
  if (isString2(value)) {
    console.log(`String value: ${value.toUpperCase()}`);
  } else {
    assertIsNumber2(value);
    console.log(`Number value: ${value.toFixed(2)}`);
  }
}

//---------------------------------------------------------------------------------
