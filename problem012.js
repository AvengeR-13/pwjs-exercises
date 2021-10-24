const objectsDiff = function(a,b) {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    return aKeys
        .filter(x => !bKeys.includes(x))
        .concat(bKeys.filter(x => !aKeys.includes(x)));
}