const HOTDOG_PRICE = 4.80;
const FRIES_PRICE = 3.95;
const DRINK_PRICE = 1.99;

// Prompt the user for quantities of each item
let numDogs = parseInt(prompt("How many hotdogs would you like?", "0"), 10);
let numFries = parseInt(prompt("How many fries would you like?", "0"), 10);
let numSoda = parseInt(prompt("How many sodas would you like?", "0"), 10);

// Function to round to exactly 2 decimal places and format as a string
function showMoney(amount) {
    let rounded = Math.round(amount * 100) / 100;
    let parts = rounded.toString().split(".");
    if (parts.length === 1) {
        return parts[0] + ".00";
    } else if (parts[1].length === 1) {
        return parts[0] + "." + parts[1] + "0";
    }
    return parts[0] + "." + parts[1];
}

// Calculate subtotal
let subtotalBeforeDiscount = (numDogs * HOTDOG_PRICE) + (numFries * FRIES_PRICE) + (numSoda * DRINK_PRICE);
let discount = 0;

// Apply discount if eligible
if (subtotalBeforeDiscount >= 25) {
    discount = subtotalBeforeDiscount * 0.10;
}

let subtotalAfterDiscount = subtotalBeforeDiscount - discount;

// Calculate tax (6.25%)
let tax = subtotalAfterDiscount * 0.0625;

// Calculate final total
let finalTotal = subtotalAfterDiscount + tax;

// Display the order details
document.getElementById('orderDetails').innerHTML = `
    <h2>Order Summary:</h2>
    <p>Hotdogs: ${numDogs} x $${showMoney(HOTDOG_PRICE)} = $${showMoney(numDogs * HOTDOG_PRICE)}</p>
    <p>French Fries: ${numFries} x $${showMoney(FRIES_PRICE)} = $${showMoney(numFries * FRIES_PRICE)}</p>
    <p>Drinks: ${numSoda} x $${showMoney(DRINK_PRICE)} = $${showMoney(numSoda * DRINK_PRICE)}</p>
    <hr>
    <p>Subtotal before discount: $${showMoney(subtotalBeforeDiscount)}</p>
    <p>Discount: -$${showMoney(discount)}</p>
    <p>Subtotal after discount: $${showMoney(subtotalAfterDiscount)}</p>
    <p>Tax (6.25%): $${showMoney(tax)}</p>
    <hr>
    <p><strong>Final Total: $${showMoney(finalTotal)}</strong></p>
`;

