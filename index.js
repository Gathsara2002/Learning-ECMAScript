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


//Array  Destructuring ----------------------------------------------------------------

let arr=['1','2','3'];

//without destructuring
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);


//with destructuring
let [first,second,third]=arr;
console.log(first);
console.log(second);
console.log(third);

second='10';
console.log(second);
