const stringRotate = function(str, num) {
    if (typeof num !== 'number' || num < 0)
        return "";

    return str.substr(num) + str.substr(0, num);
}