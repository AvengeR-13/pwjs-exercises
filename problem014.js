/*function doubleAll(numbers) {
    var result = []
    for (var i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2)
    }
    return result
}*/
function doubleAll(numbers) {
    let result = [];
    numbers.map(function (x) {
        result.push(x*2);
    });
    return result;
}