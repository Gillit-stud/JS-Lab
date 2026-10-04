const array = [1, true, 278, 42, 69, 21, "Craunger", false, "Oleksandr", 9.1, "ЛАДГЕ", -4];
const counters = {};
for (const item of array) {
    if (typeof item === "string") {
        counters.string === undefined ? counters.string = 1 : counters.string += 1;
    } else if (typeof item === "number") {
        counters.number === undefined ? counters.number = 1 : counters.number += 1;
    } else if (typeof item === "boolean") {
        counters.boolean === undefined ? counters.boolean = 1 : counters.boolean += 1;
    }
}
console.log(counters);