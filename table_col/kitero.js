console.log(`Mukszik`);

/**
 * @type {string}
 */
const abc = `abcdefg`;
console.log(abc);

/**
 * @type {string[]}
 */
const array = [`Józsi`, `Lajcsi`, `Feri`];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
for (const i of array) {
    console.log(i);
}
for (const key in array) {
    console.log(`${key}: ${array[key]}`);
}

/**
 * @type {{nev:string, age:number}}
 */
const a = {
    nev: `Levi`,
    age: 17
}
console.log(a);