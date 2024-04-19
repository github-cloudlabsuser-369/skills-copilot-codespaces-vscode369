//Task #:4
const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];
  // As an illustration, pull names and age out of the data array.
    const person = data.map((group) => {
        return group.map((person) => {
            return { firstname:person.name, age:person.age };
                     
        });
    });
    console.log(person);
    // Output:
    // [    [ { firstname: 'John', age: 25 }, 
    //        { firstname: 'Jane', age: 30 } ], 
    //   [ { firstname: 'Bob', age: 40 } ] ]    

// As an illustration, pull names out of the data array.
const names = data.map((group) => {
    return group.map((person) => {
      return person.name;
    });
  }
  );
  console.log(names);
  // Output:
  // [ [ 'John', 'Jane' ], [ 'Bob' ] ]

// As an illustration, pull ages out of the data array.
const ages = data.map((group) => {
    return group.map((person) => {
      return person.age;
    });
  }
  );
  console.log(ages);
  // Output:
  // [ [ 25, 30 ], [ 40 ] ]

