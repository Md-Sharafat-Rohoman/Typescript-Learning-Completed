

type GenericArray<T> = Array<T>

// const friends: string[] = ['saru', 'faru','rohoman'];
const friends: GenericArray<string> = ['saru', 'faru', 'rohoman'];
// const rollNumber:number[] = [2,3,4,5];
const rollNumber: GenericArray<number> = [2, 3, 4, 5];
// const isElligable:boolean[] = [true,false,false,true];
const isElligable: GenericArray<boolean> = [true, false, false, true];


// tuple
type Coordinates<x, y> = [x, y];
const add1: Coordinates<number, number> = [3, 4];
const add2: Coordinates<string, string> = ['3', '4'];


const userList: GenericArray<{ name: string, age: number }> = [
    {
        name: 'sharafat',
        age: 21
    },
    {
        name: 'faru',
        age: 20
    }
]