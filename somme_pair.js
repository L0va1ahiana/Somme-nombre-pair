// this program is meant to output the sum of even numbers

let number; // the number the user inputs
let sum; // the sum of the even numbers

// force the user to input only an even number
do {
    number = parseInt(prompt("Enter an even number please (divisible by 2): "));
} while (number%2 != 0); // test if the number is even

let i = 0;
sum = 0;

// gets the total of all the even numbers
while (i <= number) {
    sum += i;
    i = i + 2; // to get the next even number
}

console.log(`The number you input = ${number} \nSum of the even numbers = ${sum}`);
