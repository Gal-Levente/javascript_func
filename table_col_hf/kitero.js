const szam = 6;

/**
 * ez a függvény nem használ lokális/globális változót
 * @returns {void}
 */
function valami1() {
    console.log("valami1 funkció");
}
valami1();

/**
 * ez a függvény globális változót irat ki
 */
function valami2() {
    console.log(szam);
}
valami2();

/**
 * ez a függvény lokális változót fog tartalmazni
 */
function valami3() {
    const p = 9;
    console.log(p);
}
valami3();

/**
 * @param {number} param1 - ez a bemeneti paraméter 
 * @returns {number}
 */
function valami4(param1) {
    const b = 6;
    const c = b + param1;
    return c;
}
const opsum = valami4(2);
console.log(opsum);

