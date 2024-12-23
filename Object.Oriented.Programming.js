// JavaScript Object-Oriented Programming (OOP) Tutorial

// 1. What is OOP?
// OOP stands for Object-Oriented Programming. It is a programming paradigm that uses objects and classes to organize code into reusable and logical structures.
// In JavaScript, OOP can be implemented using classes, prototypes, and objects.

// ===========================================================
// 2. Defining a Class
// A class is a blueprint for creating objects.

class Person {
    constructor(name, age) {
      this.name = name; // Instance variable
      this.age = age;
    }
  
    // Method
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Creating an object from the class
  const person1 = new Person("Alice", 25);
  const person2 = new Person("Bob", 30);
  
  person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
  person2.greet(); // Output: Hello, my name is Bob and I am 30 years old.
  
  // ===========================================================
  // 3. Inheritance
  // Inheritance allows a class (child) to inherit properties and methods from another class (parent).
  
  class Employee extends Person {
    constructor(name, age, jobTitle) {
      super(name, age); // Calls the parent class constructor
      this.jobTitle = jobTitle;
    }
  
    // Method overriding
    greet() {
      console.log(`Hello, I am ${this.name}, a ${this.jobTitle}, and I am ${this.age} years old.`);
    }
  }
  
  const employee1 = new Employee("Charlie", 35, "Software Developer");
  employee1.greet(); // Output: Hello, I am Charlie, a Software Developer, and I am 35 years old.
  
  // ===========================================================
  // 4. Encapsulation
  // Encapsulation is the bundling of data and methods that operate on the data, restricting direct access to some of the object's components.
  
  class BankAccount {
    #balance; // Private field
  
    constructor(accountHolder, initialBalance) {
      this.accountHolder = accountHolder;
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited: $${amount}. New Balance: $${this.#balance}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew: $${amount}. Remaining Balance: $${this.#balance}`);
      } else {
        console.log("Insufficient balance or invalid amount.");
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const account = new BankAccount("David", 500);
  account.deposit(200); // Output: Deposited: $200. New Balance: $700
  account.withdraw(100); // Output: Withdrew: $100. Remaining Balance: $600
  console.log(account.getBalance()); // Output: 600
  // console.log(account.#balance); // Error: Private field cannot be accessed directly
  
  // ===========================================================
  // 5. Polymorphism
  // Polymorphism allows methods in different classes to share the same name but behave differently.
  
  class Animal {
    speak() {
      console.log("This animal makes a sound.");
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log("The dog barks.");
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log("The cat meows.");
    }
  }
  
  const animals = [new Animal(), new Dog(), new Cat()];
  animals.forEach(animal => animal.speak());
  // Output:
  // This animal makes a sound.
  // The dog barks.
  // The cat meows.
  
  // ===========================================================
  // 6. Abstraction
  // Abstraction focuses on exposing only the relevant details of an object while hiding the implementation.
  // In JavaScript, abstraction can be achieved using abstract classes or interfaces (via patterns, as JavaScript does not have built-in abstract classes).
  
  class Vehicle {
    constructor(make, model) {
      if (this.constructor === Vehicle) {
        throw new Error("Cannot instantiate an abstract class.");
      }
      this.make = make;
      this.model = model;
    }
  
    displayInfo() {
      throw new Error("Method 'displayInfo()' must be implemented.");
    }
  }
  
  class Car extends Vehicle {
    displayInfo() {
      console.log(`Car: ${this.make} ${this.model}`);
    }
  }
  
  class Bike extends Vehicle {
    displayInfo() {
      console.log(`Bike: ${this.make} ${this.model}`);
    }
  }
  
  const car = new Car("Toyota", "Corolla");
  const bike = new Bike("Yamaha", "R15");
  car.displayInfo(); // Output: Car: Toyota Corolla
  bike.displayInfo(); // Output: Bike: Yamaha R15
  
  // ===========================================================
  // 7. Summary
  // - Classes provide a blueprint for creating objects.
  // - Inheritance enables code reuse.
  // - Encapsulation restricts access to internal object details.
  // - Polymorphism allows methods with the same name to behave differently.
  // - Abstraction hides unnecessary details and exposes essential ones.
  
  // Object-oriented programming helps in structuring and managing complex code effectively.
  