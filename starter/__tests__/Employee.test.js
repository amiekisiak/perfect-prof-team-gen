const Employee = require("../../lib/Employee");
const { expect } = require('@jest/globals');

test("Can instantiate Employee instance", () => { // ensures that an Employee instance can be cerated
  //by verifying that the type of the instance is an object.
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => { 
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => { //This test ensures that an Employee instance can retrieve its name value through the getName() method by verifying 
  //that the returned value matches the original name argument.
  const testValue = "Alice";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {v //This test ensures that an Employee instance can retrieve its id value through the getId() method by verifying that 
//the returned value matches the original id argument.
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => { // This test ensures that an Employee instance can retrieve its email value through the getEmail() method by verifying 
  // that the returned value matches the original email argument.
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => { //This test ensures that the getRole() method of the Employee class returns the string "Employee" 
  // by verifying that the returned value matches the test value.
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
}); 
