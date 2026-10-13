//interface in TS:
//give the contract for the object:

interface User {
    name: string;
    age: number;
}

const person : User = {
    name : 'Hello',
    age: 21
}

//readonly & optional example:
interface Book {
    readonly title: string;
    author : string;
    price: number;
    publication: string;
    subtitle? : string;
    publicationAddress ?: string 
}

const book1 : Book = {
    title: 'GenAI',
    author: 'Andrej Karpathy',
    price: 20000,
    publication: 'OpenAI',
    publicationAddress: 'Silicon Valley, USA',
}

//merge interface:
interface Box {
    height: number,
    width: number
}

interface Box {
    depth: number
}

const calculateVolume: Box = {
    height: 40,
    width: 10,
    depth: 20
}

console.log(calculateVolume);

//function in interface:
interface fun {
    add(num1: number, num2: number): number;

    subtract: (a: number, b: number) => number;
}

const calculate : fun = {
    add(a, b){
        return a + b;
    },

    subtract: (a, b) => a - b;
}
