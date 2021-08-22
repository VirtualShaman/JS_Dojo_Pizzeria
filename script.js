var pizza = {
    crust: ["thin", "hand tossed", "deep dish"],
    sauce: ["traditional", "white", "marinara", "spicy marinara"],
    cheese: ["mozzarella", "feta"],
    toppings: ["pepperoni", "sausage", "mushrooms", "olives", "onions"],
};

function pizzaOven (crust,sauce,cheese,toppings) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
};

var firstPizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);

console.log(firstPizza);

var secondPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"])

console.log(secondPizza);

var thirdPizza = pizzaOven("hand tossed", "spicy marinara", ["mozzarella", "feta"],["pepperoni", "sausage", "mushrooms", "olives", "onions"])

console.log(thirdPizza);

var fourthPizza = pizzaOven("hand tossed", "traditional", ["mozzarella"],["sausage", "onions"])

console.log(fourthPizza);

var randoPizza = pizzaOven
(pizza.crust[Math.floor(Math.random()*(pizza.crust.length))],
 pizza.sauce[Math.floor(Math.random()*(pizza.sauce.length))],
 pizza.cheese[Math.floor(Math.random()*(pizza.cheese.length))],
 pizza.toppings[Math.floor(Math.random()*(pizza.toppings.length))])

console.log(randoPizza);