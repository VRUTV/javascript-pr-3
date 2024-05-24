function fs(limit) {
    let fn = 0;
    let sn = 1;
    let fibonacci = "";

    while (fn <= limit) {
        fibonacci += fn + ", ";
        let nextNum = fn + sn;
        fn = sn;
        sn = nextNum;
    }

    console.log("Fibonacci series up to "  + fibonacci);
}

fs(100);
