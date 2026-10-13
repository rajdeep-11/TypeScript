//OOPS in TS:

class Account {
    public username: string;
    private readonly _id: string;
    private balance: number;
    protected accountType: string;

    constructor(id: string, username: string, balance: number, accoutType: string){
        if(balance < 0) {
            throw new Error("Balance cann't be negative");
        }
        this._id = id;
        this.username = username;
        this.balance = balance;
        this.accountType = accoutType;
    }

    //getter and setter:
    get accountBalance(): number {
        return this.balance;
    }

    set creditAmount(value: number){
        if(value < 0){
            throw new Error("Amount cann't be  negative");
        }
        if(value + this.balance > 60000){
            throw new Error("Beyond the account limit");
        }
        this.balance += value;
    }

    set debitAmount(value: number){
        if(value < 0){
            throw new Error("Amount cann't be negative");
        }

        if(value > this.balance){
            throw new Error("Insufficinet balance")
        }

        this.balance -= value;
    }

    //methods:

    //check for valid amount:
    isValidAmount(value: number): boolean{
        return value > 0;
    }

    getBalance(): number {
        return this.balance;
    }

    amountCredit(value: number): void{
        if(this.isValidAmount(value)){
            this.balance += value;
        }
        throw new Error("Amount cann't be negative");
    }

    amountDebit(value: number): void{
        if(this.isValidAmount(value)){
            this.balance -= value;
        }
        throw new Error("Amount cann't be negative");
    }
}

const user1 = new Account("10", "Powathi", 50000, "Savings");
console.log(user1);

user1.debitAmount = 5000;
console.log(`${user1.username} account balance after debit ${user1.accountBalance}`);

user1.creditAmount = 7000;
console.log(`${user1.username} account balance after credit ${user1.accountBalance}`);

user1.amountCredit(-1000);
console.log(user1.getBalance());
