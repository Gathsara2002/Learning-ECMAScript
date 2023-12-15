//Template literals ------------------------------------------------------------------

let name1 = 'Gathsara';
let name2 = 'Liviru';

let name = `${name1} ${name2}`;
console.log(name);


//Object Destructuring ----------------------------------------------------------------

const person = {
    firstName: 'John',
    lastName: 'Doe',
    city: "LA",
    detail : {
        data: 'hi'
    }
}

const { firstName, lastName, city } = person;
console.log(firstName, lastName, city);

//Use alias to rename variables
const { firstName: fn } = person;
console.log(fn);

//Nested object
const{detail:{data}}=person;
console.log(data);