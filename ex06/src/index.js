function firstName(firstName) {
    return firstName.toUpperCase();
}
function lastName(lastName) {
    return lastName.toLowerCase();
}
console.log(firstName("Rusmira"));
console.log(lastName("Sabic Mahic"));
exports.firstName = firstName;
exports.lastName = lastName;
