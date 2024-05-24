function pa() {
    for (let i = 5; i >= 1; i--) {

        let pattern = "";

        for (let j = 5; j >= i; j--) {

            pattern += j + " ";
        }
        console.log(pattern);
    }
}


pa();
