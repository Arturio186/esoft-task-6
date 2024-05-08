//---------------------------------------------------------------------------------
// Задание 2: Расширенное использование Generics
// Цель: Создать универсальную функцию обработки данных, которая может работать с различными типами данных.

// Определите Generic интерфейс Response с одним параметром типа T. Второй параметр status: number
interface CustomResponse<T> {
  data: T;
  status: number;
}

// Реализуйте и типизируйте функцию, которая возвращает объект Response для переданных данных
function createResponse<T>(data: T, status: number): CustomResponse<T> {
  return { data, status };
}

// Используйте функцию createResponse для создания ответа с массивом чисел
const numericResponse = createResponse<number[]>([1, 2, 3, 4], 200);

// Используйте функцию createResponse для создания ответа с объектом пользователя (User)

const tom: User = { id: 0, name: 'Tommy', email: 'tomik0000@mail.ru' };

const userResponse = createResponse<User>(tom, 200); // Заполните вызов функции
//---------------------------------------------------------------------------------
