// Good Luck 💪🏾
function mostExpensive(jewelry) {
    let highestPrice = 0;
    let mostExpensiveName = '';

    for (const [name, price] of Object.entries(jewelry)) {
        if (price > highestPrice) {
            highestPrice = price;
            mostExpensiveName = name;
        }
    }

    return `The most expensive one is the ${mostExpensiveName}`;
}

// Example usage:
console.log(mostExpensive({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
})); // "The most expensive one is the Pearl Necklace"

console.log(mostExpensive({
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500
}));