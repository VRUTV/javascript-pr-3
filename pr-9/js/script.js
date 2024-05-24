function integer() {
    let total = 0;
    let num = 0;

    do {
        total += num;
        num++;
    } while (num <= 30);

    console.log("The total sum of integers between 0 and 30 is: " + total);
}


integer();
