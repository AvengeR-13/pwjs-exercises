const isLeapYear = function(a) {
    return ((a % 4 === 0) && (a % 100 !== 0) || a % 400 === 0);
}