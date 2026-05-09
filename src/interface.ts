

type User = {
    name: string;
    age: number;
}

interface IUser {
    name: string;
    age: number;
}

type Role = {
    role: "admin" | "user";
}

type UserRole = User & Role;
const user1: UserRole = {
    name: "sharafat",
    age: 21,
    role: 'admin'
}

const user2: IUser = {
    name: "faru",
    age: 20
}
console.log(user1);
console.log(user2);


interface IUserWithRole extends IUser {
    role: "admin" | "user"
}


type Add = (num1: number, num2: number) => number;

interface IAdd {
    (num1: number, num2: number): number;
}
const add: IAdd = (num1,num2) => num1 + num2;
console.log(add(3,4));


