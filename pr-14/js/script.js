function pa() {
    let number = 1;

    for (let i = 1; i <= 5; i++) {

        let pattern = "";

        for (let j = 1; j <= i; j++) {

            pattern += number + " ";

            number++;
        }
        console.log(pattern);
    }
}


pa();
