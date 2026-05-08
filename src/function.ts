// array function
// normal function

function addNormal(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(addNormal(1, 2));



type Add = {
    (num1: number, num2: number): number;
}
const add: Add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(3, 4));


const poorUser = {
    name:"sharafat",
    balance: 0,
    addBalance(value: number) : number{
        const totalBalance = this.balance + value;
        return totalBalance;
    }
}
console.log(poorUser.addBalance(20));
console.log(poorUser.addBalance(50));


const array:number[] = [1, 2, 3, 4, 5];
const sqrtArray = array.map((num:number) : number => num * num);
console.log(sqrtArray);