'use strict';

const Person = function (firstName, lastName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
};

const aboulmagd = new Person('mohamed', 'aboulmagd', 1982);

console.log('aboulmagd instanceof class Person', aboulmagd instanceof Person);

console.log(Person.prototype);
// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

aboulmagd.calcAge();
const empname = aboulmagd.fullName();
console.log(empname);

console.log(aboulmagd.__proto__);

const eman = new Person('eman', 'mohamed', 1983);
console.log(eman.__proto__);
console.log(Person.prototype);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4];
console.log(arr.__proto__);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName} 💁`);
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  get age() {
    return 2037 - this.birthYear;
  }

  static hey() {
    console.log(`hey 🙋‍♂️`);
  }
}

// const carla = new PersonCl('carla mohamed', 2016);
// const lara = new PersonCl('lara mohamed', 2019);
// const carlaAge = carla.age;
// const laraAge = lara.age;
// console.log('carlaAge', carlaAge);
// console.log('laraAge', laraAge);
// console.log(carla.__proto__ === PersonCl.prototype);
// console.log(PersonCl.prototype);

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

// Public fields
// Private fields
// Public methods
// Private methods

class Account {
  //Public fields
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;
    // this._movements = [];
    // this.local = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  //Private methods
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('aboulmagd', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);

console.log(Account.helper());
// console.log(acc1.#movements);

class StreetVendorsViewer {}
