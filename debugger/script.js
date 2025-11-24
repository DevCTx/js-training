function calculateTotalPrice(price, discountPercentage) {
 let discountAmount = (price * discountPercentage) / 100
 let totalPrice = price - discountAmount

 const tablePrice = [{price:price, discountPercentage:discountPercentage, discountAmount:discountAmount, totalPrice:totalPrice}]
 console.log(`Original Price: ${price}`)
 console.log(`Discount Amount: ${discountAmount}`)
 console.log(`Total Price after Discount: ${totalPrice}`)
 console.table(tablePrice, totalPrice)
 debugger

 return totalPrice
}

const user = {
  name: "Alice",
  age: 25,
  greet: function() {
    return "Hello!";
  }
};

console.log(user);  // Affichage simple
debugger
console.dir(user);  // Affichage détaillé avec toutes les propriétés

let price = 100
let discount = 15

let finalPrice = calculateTotalPrice(price, discount)
console.log(`Final Price: ${finalPrice}`);
