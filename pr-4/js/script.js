function PalindromeNum(limit) {
    let num = 1;

    while (num <= limit) {
        let orinum = num;
        let renum= 0;
        let temp = orinum;


        while (temp > 0) {
            let digit = temp % 10;
            renum = renum * 10 + digit;
            temp = Math.floor(temp / 10);
        }

 
        if (orinum === renum) {
            console.log(orinum + " is a palindrome number.");
        }

        num++;
    }
}


PalindromeNum(500);