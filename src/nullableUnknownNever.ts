

const getUser = (input: string) => {
    if (input) {
        console.log(`From DB : ${input}`)
    }
    else {
        console.log("From DB : all user")
    }
}
getUser("saru")
getUser(null) // wrong


// unknown 
const discountCalculator = (input: unknown) => {
    if (typeof input === "number") {
        console.log(input * 0.1);
    }
    else if (typeof input === "string") {
        const [discountPrice] = input.split(" ");
        console.log(Number(discountPrice) * 0.1)
    }
    else {
        console.log('unknown type')
    }
}
discountCalculator(100);
discountCalculator("100 tk");
discountCalculator(null);


