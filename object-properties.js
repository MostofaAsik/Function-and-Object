var shoppingCurt = {
    books: 3,
    sunglass: 1,
    keyboards: 2,
    mouse: 2,
    pen: 2,
}

for (let item in shoppingCurt) {
    console.log(item);
}

//when you know specific property name
console.log(shoppingCurt.pen); //>>process-1 with dot notation
//alternative
console.log(shoppingCurt["pen"]); //>>process-2 with third bracket

console.log(Object.keys(shoppingCurt)); //>>to know keys name
console.log(Object.values(shoppingCurt)); //>>to know values name