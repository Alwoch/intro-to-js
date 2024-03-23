// Custom person object
let person = {
    name: 'John',
    age: 30,
    gender: 'male',
    address: {
      city: 'New York',
      country: 'USA'
    },
    sayHello: function() {
      console.log('Hello, my name is ' + this.name);
    }
  };
  
  // Accessing properties
  console.log('Person name:', person.name);
  console.log('Person age:', person.age);
  console.log('Person gender:', person.gender);
  console.log('Person city:', person.address.city);
  
  // Setting properties
  person.name = 'Jane';
  console.log('Updated person name:', person.name);
  
  // Accessing methods
  person.sayHello();
  
  // Accessing document properties
  console.log('Document title:', document.title);
  console.log('Document body:', document.body);