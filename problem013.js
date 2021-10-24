const parametricSort = function(array, order) {
    switch (order) {
        case 'asc':
            return array.sort();
        case 'desc':
            return array.sort().reverse();
        default:
            return false;
    }
}
