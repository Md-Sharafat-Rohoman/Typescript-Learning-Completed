
type User = {
    id: number,
    name: {
        firstName: string,
        lastName: string
    },
    gender: string,
    contactNo: string,
    address: {
        division: string,
        city: string
    }
}

const user1: User = {
    id: 123,
    name: {
        firstName: "sharafat",
        lastName: "rohoman"
    },
    gender: "male",
    contactNo: "01615879508",
    address: {
        division: "noakhali",
        city: "oskhali"
    }
}
console.log(user1)


interface User2 {
    id: number,
    name: {
        firstName: string,
        lastName: string
    },
    gender: string,
    contactNo: string,
    address: {
        division: string,
        city: string
    }
}
const user2:User2 = {
    id:1,
    name:{
        firstName: "faru",
        lastName:"moni"
    },
    gender: "female",
    contactNo:"01615879508",
    address:{
        division:"noakhali",
        city: "chomunhi"
    }
}
console.log(user2)


type AddFunction = (num1:number, num2:number) => number;
const add:AddFunction = (num1,num2) =>{
    return num1 + num2
}
console.log(add(3,4))