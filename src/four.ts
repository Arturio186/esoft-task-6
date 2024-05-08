
  //---------------------------------------------------------------------------------  
  // Задание 4: Использование Utility Types для работы с интерфейсами
  // Цель: Модифицировать интерфейсы для специфических нужд без изменения оригинальных интерфейсов.
  
  // Определите интерфейс Employee
  interface Employee {
    id: number;
    name: string;
    department: string;
    email: string;
  }
  
  // Используйте Utility Type для создания типа, который делает все свойства Employee опциональными
  type PartialEmployee = Partial<Employee>
  
  // Используйте Utility Type для создания типа, который делает все свойства Employee доступными только для чтения
  type ReadonlyEmployee = Readonly<Employee>
  
  // Создайте функцию, которая принимает PartialEmployee и выводит информацию о сотруднике
  function printEmployeeInfo(employee: PartialEmployee) {
    console.log('-'.repeat(30))

    for (const key in employee) {
        console.log(`${key}: ${employee[key]}`)
    }
    
    console.log('-'.repeat(30))
  }

  const tommy : PartialEmployee = { id: 0, name: 'Tommy' }
  const sean : PartialEmployee = { department: 'IT', email: 'sean.b@mail.ru' }
  const empty : PartialEmployee = { }

  printEmployeeInfo(tommy)
  printEmployeeInfo(sean)
  printEmployeeInfo(empty)
  //---------------------------------------------------------------------------------