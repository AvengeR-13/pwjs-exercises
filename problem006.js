function divisible(a) {
    let isDivisible = true;
    for (let i = 1; i < arguments.length; i++) {
        if (!Number.isInteger(arguments[i]) || a % arguments[i] !== 0)
            isDivisible = false;
    }
    return isDivisible;
}