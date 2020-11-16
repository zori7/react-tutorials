function add(a, b) {
    return a + b;
}
function toUppercase(str) {
    return str.trim().toUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, "default": 'good' };
    }
    return { x: a, y: b };
}
console.log(position());
console.log(position(42));
console.log(position(25, 35));
