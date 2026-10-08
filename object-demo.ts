/**
 * Define types for objects:
 * 
 * classes - data memebers, memeber functions
 * interface - a type of contract:
 * 
 */

//class way:
 class Car {
    name : string
    constructor(name : string){
        this.name = name;
    }

    display(){
        console.log('Congrats', this.name);
    }
 };


//interface way:
 interface Car1 {
    name : string;
    price : number;
    color : string;

    display() : void;
 }

let newCar : Car1 = {
    name : 'BMW',
    price : 200000,
    color : 'Black',

    display: () => {
        console.log('Speed is 120 km / h');
    }
}

console.log(newCar); //here display can't printed because in web log happen via JSON.stringfy():
console.log(newCar.display()); // undefined came here because that function console.log return undefined:
newCar.display();
