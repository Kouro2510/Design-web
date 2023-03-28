const btnBuyNow = document.querySelector('.btn-buy-now');
const btnCardPayment = document.querySelector('.btn-card-payment');
const btnMomoPayment = document.querySelector('.btn-momo-payment');

const buyNowDetails = document.querySelector('.buy-now-details');
const cardPaymentDetails = document.querySelector('.card-payment-details');
const momoPaymentDetails = document.querySelector('.momo-payment-details');

btnBuyNow.addEventListener('click', () => {
    showDetails(buyNowDetails);
    changeDetails();
});

btnCardPayment.addEventListener('click', () => {
    showDetails(cardPaymentDetails);
    changeDetails();
});

btnMomoPayment.addEventListener('click', () => {
    showDetails(momoPaymentDetails);
    changeDetails();
});

function showDetails(details) {
    const allDetails = document.querySelectorAll('.payment-details > div');
    allDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    details.classList.add('active');
}

const changePayment = document.querySelectorAll('.payment-options > button')
function changeDetails(details) {
    changePayment.forEach(detail => {
        detail.classList.remove('active-checkout');
    });
    details.classList.toggle('active-checkout');
}
