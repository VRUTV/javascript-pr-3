function Ft(num) {

    let factorial = 1;
    let i = num;

    while (i > 1) {
        factorial  *= i;
        i--;
    }

    console.log("Factorial of " + num + " is " + factorial);
}
Ft(5);
