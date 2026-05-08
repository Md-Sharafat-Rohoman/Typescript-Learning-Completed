// ? ternary operator : decision making helpful
// ?? nullish       // null/undefined ar khetre
// ?. optional 

const userAge = 21;
const biyerJonnoEligable = (age: number) => {
    // if(age> 20){
    //     console.log("you are eligible")
    // }
    // else{
    //     console.log("you are not eligible")
    // }
    const biyerJonnoEligable2 = (age > 21) ? console.log("you are eligible") : console.log("you are not eligible")
}
console.log(biyerJonnoEligable(userAge));

// nullish
// const userTheme = undefined;
const userTheme = "hello";
const selectedTheme = userTheme ?? "Light Theme";
console.log(selectedTheme);


const user: {
    address: {
        city: string,
        town: string
    }
} = {
    address: {
        city: "Dhaka",
        town: "Dhaka"
    }
}
console.log(user.address.city)