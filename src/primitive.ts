// string, number, boolean, null, undefined
// never, unKnown, void

let userName:string = "Sharafat";
// userName = 1234; // Error: Type 'number' is not assignable to type 'string'.
console.log(userName);
// userName.tofixed(2); // Error: Property 'tofixed' does not exist on type 'string'. Did you mean 'toFixed'? 
userName.toString();

let age:number = 30;
console.log(age);

let isAdmin = true;
// isAdmin = "hello"; // Error: Type 'string' is not assignable to type 'boolean'.
console.log(isAdmin);

let X:undefined = undefined;
let Y:null = null;