//---------------------------------------------------------------------------------
// Задание 3: Расширенное использование Generics
// Цель: Разработать несколько функций для обработки и различения типов данных.

// Определите тип данных для описания автомобиля
type Car = {
  company: string;
  model: string;
  year: number;
};

// Определите тип данных для описания велосипеда
type Bike = {
  company: string;
  type: "road" | "mountain";
};

// Создайте Type Guard для проверки, является ли объект автомобилем
function isCar(vehicle: Car | Bike): vehicle is Car {
  const carFields = ["company", "model", "year"];

  for (const key in vehicle) {
    if (carFields.indexOf(key) === -1) {
      return false;
    }
  }

  return true;
}

const bike: Bike = { company: "test", type: "mountain" };
const car: Car = { company: "test", model: "x", year: 2014 };

console.log(isCar(car));
console.log(isCar(bike));

// Используйте Type Guard в функции, которая печатает информацию о транспорте. Небольшая подсказка о том, какие параметры в себя может принимать isCar дана ниже.
function printVehicleInfo(vehicle: Car | Bike) {
  if (isCar(vehicle)) {
    console.log(`Car: ${vehicle.company} ${vehicle.model} ${vehicle.year}`);
  } else {
    console.log(`Bike: ${vehicle.company} ${vehicle.type}`);
  }
}

printVehicleInfo(car)
printVehicleInfo(bike)
//---------------------------------------------------------------------------------
