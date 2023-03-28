// Get the price, quantity, and total elements
const priceElement = document.getElementById("price");
const quantityInput = document.getElementById("quantity");
const totalElement = document.getElementById("total");

// Get the plus and minus buttons
const plusBtn = document.querySelector("input[value='+']");
const minusBtn = document.querySelector("input[value='-']");

// Set the initial value of the quantity
let quantity = 0;
quantityInput.value = quantity;

// Function to calculate the total price
function calculateTotalPrice() {
    const price = parseFloat(priceElement.innerText);
    const total = price * quantity;
    totalElement.innerText = total.toFixed(2) + "$";
}

// Add a click event listener to the plus button
plusBtn.addEventListener("click", function() {
    quantity++;
    quantityInput.value = quantity;
    calculateTotalPrice();
});

// Add a click event listener to the minus button
minusBtn.addEventListener("click", function() {
    quantity--;
    if (quantity < 0) {
        quantity = 0;
    }
    quantityInput.value = quantity;
    calculateTotalPrice();
});

// Call the calculateTotalPrice function initially to set the total price to 0
calculateTotalPrice();
