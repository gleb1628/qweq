const form = document.querySelector('#card-form');
const table = document.querySelector('#cards-table tbody');
const bankNamePreview = document.querySelector('#bank-name-preview');
const paymentSystemPreview = document.querySelector('#payment-system-preview');
const cardNumberPreview = document.querySelector('#card-number-preview');
const cardHolderNamePreview = document.querySelector('#card-holder-name-preview');
const expiryDatePreview = document.querySelector('#expiry-date-preview');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const bankName = document.querySelector('#bank-name').value;
    const paymentSystem = document.querySelector('#payment-system').value;
    const cardNumber = document.querySelector('#card-number').value.replace(/(\d{4})/g, '$1 ').trim();
    const cardHolderName = document.querySelector('#card-holder-name').value;
    const expiryDate = document.querySelector('#expiry-date').value;
    const newRow = table.insertRow();
    const bankCell = newRow.insertCell(0);
    const paymentSystemCell = newRow.insertCell(1);
    const cardNumberCell = newRow.insertCell(2);
    const cardHolderNameCell = newRow.insertCell(3);
    const expiryDateCell = newRow.insertCell(4);
    
    bankCell.textContent = bankName;
    paymentSystemCell.textContent = paymentSystem;
    cardNumberCell.textContent = cardNumber;
    cardHolderNameCell.textContent = cardHolderName;
    expiryDateCell.textContent = expiryDate;
    

    form.reset();
    

    bankNamePreview.textContent = bankName;
    paymentSystemPreview.textContent = paymentSystem.toUpperCase();
    cardNumberPreview.textContent = cardNumber;
    cardHolderNamePreview.textContent = cardHolderName.toUpperCase();
    expiryDatePreview.textContent = `Exp. ${expiryDate.slice(5)} / ${expiryDate.slice(2, 4)}`;
});


const paymentSystemSelect = document.querySelector('#payment-system');
const cardLogo = document.querySelector('.card-logo');

paymentSystemSelect.addEventListener('change', function(event) {
    const value = event.target.value.toLowerCase();
    cardLogo.style.backgroundImage = `url('${value}.png')`;
});
