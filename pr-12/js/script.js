
function sum() {
    let total = 0;
    let result = "";

    for (let i = 1; i <= 10; i++) {
        let square = i * i;
         total += square;

        if (i !== 1) {
            result += "+";
        }
        result += square;
    }

    console.log(result + " = " +  total);
}

sum();
