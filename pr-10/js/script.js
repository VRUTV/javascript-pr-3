function fizzBuzz() {
    let num = 1;

    do {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log("FizzBuzz");
        } else if (num % 3 === 0) {
            console.log("Fizz");
        } else if (num % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(num);
        }
        num++;
    } while (num <= 100);
}

fizzBuzz();
