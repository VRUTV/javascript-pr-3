function cd(number) {
    return number.toString().length;
}

function dn(limit) {
    let num = 1;

    while (num <= limit) {
        let temp = num;
        let sum = 0;
        let position = cd(num);

        while (temp > 0) {
            let digit = temp % 10;
            sum += Math.pow(digit, position);
            temp = Math.floor(temp / 10);
            position--;
        }

        if (sum === num) {
            console.log(num + " is a Disarium number.");
        }

        num++;
    }
}

dn(500);
