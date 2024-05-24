function primenum(limit) {
    let num = 2;

    while (num <= limit) {
        let isPrime = true;

        let divisor = 2;
        while (divisor <= num / 2) {
            if (num % divisor === 0) {
                isPrime = false;
                break;
            }
            divisor++;
        }

        if (isPrime) {
            console.log(num + " is a prime number.");
        }

        num++;
    }
}


primenum(100);