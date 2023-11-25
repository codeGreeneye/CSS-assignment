let fruit;
fruit = 18;
//fruit = fruit + 1;
fruit *= 2;
fruit += 1;

const age = 21;
const myName = "Himani";
const vegan = "true";
let favSubject = undefined;
let isScholar = null;
//console.log(typeof age, typeof myName);
//console.log(typeof vegan);
//console.log(favSubject);
console.log(typeof isScholar);

const food = [
    { id: 0,
  x: "indian",
y: "cheenese"
    },
];

const foodName = food[0].x;
const foodName2 = food[0].y;
console.log(`my favouite lunch is ${foodName} and ${foodName2}.` );
function getName(obj) {
  return obj.name;
}
//..assign.7novB,,//

const surname = 
{
   name: "sharma",
  age: 30

};

const result = getName(surname);

console.log(result);


//assign7novc//

function numbers(num1, num2, num3) {
  return num1 * num2 * num3;
}

const product= numbers(5, 6, 2);
console.log(product); 
//7novd


const friend = [1, 2, 3, 4, 5, 6];
function getFifthElement(arr)
 {
  const fifthElement = arr[5];
  return fifthElement;
}

const element= getFifthElement(friend);
console.log(element);
