const Payment = document.getElementById("payment-modal");

// Get the button that opens the modal
const openModalPaymentBtn = document.getElementById("modal-payment");

// Get the close button for the modal
const closeModalPaymentBtn = document.querySelector(".close-payment");

openModalPaymentBtn.addEventListener("click", function () {
    Payment.style.display = "block";
});

// Close the modal when clicking the close button
closeModalPaymentBtn.addEventListener("click", function () {
    Payment.style.display = "none";
});
window.onclick = function (event) {
    if (event.target === modal) {
        Payment.style.display = "none";
    }
}