/** Arryas & loops
 * 
 * 
 * let <variable_name> : type[] = [val1, val2, val3, val4.......]
 * 
 * 
 */

let ids : number[] = [1, 2, 3, 4];

let response : string[] = ['pending', 'intialize', 'cancalled'];

//union of dataTypes in arrays:
let multipleValue : (string | number | boolean)[] = ['ironman', 'spiderman', 12, 25, true, false];


//arrays in form of tuples:
let data1 : [number, string, boolean] = [1,'hello', true]; // [1, true, 'hello'] cannt assign values like this:


//loops in ts:
/**
 * for - loop
 * for(let var_name = 0; condtion, increment){
 *      log
 * }
 * 
 * 
 * for - forEach
 * array_Name.forEach(function fun_name(paramerter1, parameter2){
 *      log
 * });
 * 
 * 
 * for - of
 * for(let / const variable_name  of  array_Name){
 *      log
 * }
 * 
 */

// Classic for loop :

for(let i = 0; i < multipleValue.length; i++){
    console.log(i, multipleValue[i]);
    console.log(`${i}, ${multipleValue[i]}`);
}

console.log('for each loop');

//for - each loop:
multipleValue.forEach((values, idx) => {
    console.log(values, idx);
});

multipleValue.forEach(function printValues(values, idx){
    console.log(values, idx)
});

console.log("for of loop");

//for - of
for(const val of multipleValue) {
    console.log(typeof(val), val); // 
}
