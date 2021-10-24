const triangleArea = function(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0)
        return -1;

    let area = heronsFormula(a, b, c);

    if (area > 0)
        return Math.round(area * 100) / 100;
    else
        return -1;
}

const heronsFormula = function(a, b, c) {
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p-a) * (p-b) * (p-c));
}
