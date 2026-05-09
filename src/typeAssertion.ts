

let anything: any;
// (anything as number).
// (anything as string).

const kgToGmConverter = (input: number | string): number | string | undefined => {
    if (typeof input === 'number') {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const [value] = input.split(" ");
        return `converted to ${Number(value) * 1000}`;
    }
    else {
        console.log('unknown data type')
    }
}
const result1 = kgToGmConverter(10) as number;
const result2 = kgToGmConverter("20 kg") as string;
console.log(result1, result2);




type CustomError = {
    message: string;
}
try {

}
catch (CustomError) {
    console.log();


}