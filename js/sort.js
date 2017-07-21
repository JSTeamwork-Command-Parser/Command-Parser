function sort() {
    if (commandToken.length !== 1) {
        return "Error: invalid command parameter";
    }
    arr.sort();
    return arr.join(' ');
}