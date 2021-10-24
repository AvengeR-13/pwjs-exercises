let deepFindAndCount = function(a, b) {
    let counter = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            counter++;
            continue;
        }
        if (Array.isArray(a[i])) {
            counter += deepFindAndCount(a[i], b);
        }
    }
    return counter;
}