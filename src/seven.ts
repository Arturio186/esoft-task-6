//---------------------------------------------------------------------------------
  // Задание 7: Работа с обобщённой функцией поиска в массиве
  // Цель: Создать функцию, которая может искать элементы в массиве по разным критериям, включая составные типы и условия с использованием нескольких параметров в Generics.
  interface User3 {
    id: number;
    name?: string;
    age: number;
  }
  
  interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  interface Book {
    isbn?: string;
    title: string;
    author: string;
  }
  
  // Разберитесь с типизацией функции и поймите как она работает.
  // Как можно улучшить функцию findInArray, чтобы она обрабатывала случаи, когда ключ или значение отсутствуют?
  // Можно ли использовать эту функцию для поиска по нескольким ключам одновременно? Если да, как бы вы это реализовали?
  function findInArray<T, K extends keyof T>(items: T[], key: K, value: T[K]): T | undefined {
    return items.find(item => {
      if (item.hasOwnProperty(key) && item[key] !== undefined) {
          return item[key] === value;
      }

      return false;
    });
  }


  function findInArrayBetter<T, K extends keyof T>(items: T[], keys: K[], value: T[K]): T | undefined {
    if (items.length === 0) {
      return undefined
    }

    console.log(items)

    return items.find(item => {
      for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i]

        if (!item.hasOwnProperty(key) || item[key] === undefined) {
          continue
        }

        if (item[key] === value) 
          return true
      }

      return false
    });
  }
  
  // Данные для тестирования функции
  const users2: User3[] = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 30, name: "Sonny", age: 5 },
  ];
  
  const products: Product[] = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Smartphone", price: 500 }
  ];
  
  const books: Book[] = [
    { isbn: "12345", title: "The TypeScript Handbook", author: "Someone" },
    { isbn: "12345", title: "The TypeScript Handbook", author: "Another One" },
    { title: "Test", author: "Test" }
  ];
  
  //---------------------------------------------------------------------------------
  

// 1. Найдите пользователя по имени "Alice".
const foundUser = findInArray(users2, 'name', 'Alice');
const foundUser2 = findInArrayBetter(users2, ['age', 'id'], 30)
console.log([foundUser, foundUser2])
// 2. Найдите продукт с ценой 500.
const foundProduct = findInArray(products, 'price', 500);
const foundProduct2 = findInArrayBetter(products, ['price', 'id'], 2)
console.log([foundProduct, foundProduct2])
// 3. Найдите книгу по автору "Another One".
const foundBook = findInArray(books, 'author', 'Another One');
const foundBook2 = findInArrayBetter(books, ['author', 'isbn'], '12345')
console.log([foundBook, foundBook2])
//---------------------------------------------------------------------------------
