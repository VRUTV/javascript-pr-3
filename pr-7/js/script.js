function Magicnum(limit) {
    let num = 1;

    while (num <= limit) {
        let sum = num;

        while (sum > 9) {
            let tempSum = 0;

            while (sum > 0) {
                tempSum += sum % 10;
                sum = Math.floor(sum / 10);
            }
            sum = tempSum;
        }


        if (sum === 1) {
            console.log(num + " is a magic number.");
        }

        num++;
    }
}

Magicnum(100);
