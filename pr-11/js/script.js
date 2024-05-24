function num() {
    let result = "";

    for (let i = 1; i <= 10; i++) {

        if (i !== 1) {
            result += "-";
        }
        result += i;
    }

    console.log(result);
}

num();
