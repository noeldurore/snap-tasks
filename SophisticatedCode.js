/*
Filename: SophisticatedCode.js
Content: A sophisticated and complex code example in JavaScript
*/

// Utility function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Utility function to generate a random string of specified length
function getRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  
  return result;
}

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Class representing a Car
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  
  drive() {
    console.log(`Driving the ${this.brand} ${this.model}`);
  }
  
  static honk() {
    console.log('Beep beep!');
  }
}

// Function to calculate the factorial of a number recursively
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  
  return n * factorial(n - 1);
}

// Function to sort an array of objects by a specific property
function sortByProperty(arr, propertyName) {
  arr.sort((a, b) => {
    if (a[propertyName] < b[propertyName]) {
      return -1;
    }
    if (a[propertyName] > b[propertyName]) {
      return 1;
    }
    return 0;
  });
}

// Generate a random array of numbers
const randomNumbers = Array.from({ length: 10 }, () => getRandomNumber(1, 100));

// Generate a random string of length 10
const randomString = getRandomString(10);

// Create a new Person object and call the greet method
const john = new Person('John', 35);
john.greet();

// Create a new Car object and call the drive method
const myCar = new Car('Tesla', 'Model S', 2022);
myCar.drive();

// Call the static honk method of the Car class
Car.honk();

// Calculate the factorial of a number
const factorialResult = factorial(5);
console.log(`Factorial of 5: ${factorialResult}`);

// Sort an array of objects by the 'age' property
const persons = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 }
];
sortByProperty(persons, 'age');
console.log('Sorted by age:', persons);

// Print the randomly generated array and string
console.log('Random numbers:', randomNumbers);
console.log('Random string:', randomString);

// ... (more code to reach 200+ lines)