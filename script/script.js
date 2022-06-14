// Factory function practice
// 1. Write a function that accepts three parameters: name, hours, and rate.
// 2. Please return an object with two properties.
// name and salary.
// salary, should be a function that will return a person's salary.
// 3. Create two objects with the below examples:
// - employee1: Name: Peter, Salary: 40 * 500
// - employee2: Name: Samuel, Salary: 80 * 300

function Person(name, hours, rate) {
  return {
    name: name,
    salary: () => {
      let calc = hours * rate;
      return document.write(`
        I am ${name}
        and I make ${eval(hours * rate)}
        per month <br>`);
    }
  };
}

let employee1 = Person("Peter", 80, 500);
employee1.salary();

let employee2 = Person("Samuel", 80, 300);
employee2.salary();
