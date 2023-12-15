function skillsMember() {
    var member = 1;
    return function () {
        return member++;
    }
}