
function Ams(limit) {
    let num = 1;

    while (num <= limit) {
        let sum = 0;
        let temp = num;
        const digits = temp.toString().length;

        while (temp > 0) {
            let digit = temp % 10;
            sum += Math.pow(digit, digits);
            temp = Math.floor(temp / 10);
        }

        if (sum === num) {
            console.log(num + " is an Armstrong number.");
        }

        num++;
    }
}

Ams(500);
