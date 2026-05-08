// array, object

let bazarList: string[] = ["eggs", "milk", "sugar"];
bazarList.push("bread");
console.log(bazarList);
// bazarList.push(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string'.

let mixedArray: (string | number)[] = ["saru", 21, "faru", 20];


let coordinates: [number, number] = [20, 30];
console.log(coordinates);

let data: any[] = ["hello", 123, true];

let anyThing: unknown[] = ["hello", 123, true];
console.log(anyThing);
console.log(data);


let userNameAndRoll: [string, number] = ["Sharafat", 4];
let destination: [string, string, number] = ["Dhaka", "Chittagong", 6];



// reference type

type UserName = {
    // organization: "Sharafat On Fire"
    readonly organization: string;
    firstName: string;
    middleName: string;
    lastName?: string;
    isMarried?: boolean
}


const user: UserName = {
    organization: "Sharafat On Fire",
    firstName: "Sharafat",
    middleName: "Rohoman",
    lastName: "Sarkar",
    isMarried: false
}
// user.firstName = "Sarkar"; // Allowed, because 'firstName' is not a readonly property
// user.organization = "farun on fire"; // Error: Cannot assign to 'organization' because it is a read-only property
console.log(user)