console.log('Hello');

//types in TS:

let username : string = 'Hello';
let password : number = 12345;

// password = '12345' (cann't reassign the string value to the passowrd due to dataType conflit):

const isActive : boolean = true;

// multiple dataType
let lockPassword : (string | number) = '45623';

lockPassword = 45326;

//vaiours types:
// number, string , boolean, any , never, null, symbol

let lock = 10;
