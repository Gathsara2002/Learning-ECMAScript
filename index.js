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
    detail: {
        data: 'hi'
    }
}

const { firstName, lastName, city } = person;
console.log(firstName, lastName, city);

//Use alias to rename variables
const { firstName: fn } = person;
console.log(fn);

//Nested object
const { detail: { data } } = person;
console.log(data);


//Array  Destructuring ----------------------------------------------------------------

let arr = ['1', '2', '3'];

//without destructuring
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);


//with destructuring
let [first, second, third] = arr;
console.log(first);
console.log(second);
console.log(third);

second = '10';
console.log(second);



//Object Literals ----------------------------------------------------------------

function addressMaker(city, state) {

    //Traditional object
    const newAddress = { city: city, state: state }
    console.log(newAddress);

    //Object literal
    const newAddress1 = { city, state }
    console.log(newAddress1);
}

addressMaker('Austin', 'Texas');


//incudes() ------------------------------------------------------------------------

let array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(array.indexOf(1));  //0
console.log(array.includes(1));  //true


//Spread(...) operator ----------------------------------------------------------------------

let ar1 = [1, 2, 3, 4];
let ar2 = [5, 6, 7, 8];

let ar3 = [...ar1, ...ar2];
console.log(ar3);  //[1, 2, 3, 4, 5, 6, 7, 8]

let maxVal=Math.max(...ar3);
console.log(maxVal);


//Rest(...) operator ----------------------------------------------------------------------

function printNumbers(...nums) {
    console.log(nums);
}

printNumbers(1,2,3,4,4);


