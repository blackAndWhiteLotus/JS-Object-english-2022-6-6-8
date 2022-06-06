var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
var total = 0;
for (let idx in fruit) {
    total += fruit[idx]
}
console.log(total)