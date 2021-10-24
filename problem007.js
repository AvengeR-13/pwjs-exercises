const findMax = function (a) {
    let max = a;
    for (let i = 0; i <= arguments.length; i++) {
        if (max < arguments[i])
            max = arguments[i];
    }
    return max;
}