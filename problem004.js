const getTotalNumberOfNewYaersEveSundays = function(a, b) {
    let year = a;
    let counter = 0;
    for (year; year<= b; year++) {
        let date = new Date(year, 0, 1);
        if (date.getDay() === 0)
                counter++;
    }
    return counter
}