let clearAll = document.getElementById('clear-all')
clearAll.addEventListener('click', function() {
    document.getElementById('mortgage-amount').value = '';
    document.getElementById('mortgage-term').value = '';
    document.getElementById('interest-rate').value = '';
    document.getElementById('repayment').checked = false;
    document.getElementById('interest-only').checked = false;
    document.getElementById('result').innerHTML = '';

    document.getElementById('mortgage-amount').style.borderColor = '';
    document.getElementById('mortgage-term').style.borderColor = '';
    document.getElementById('interest-rate').style.borderColor = '';
})

let calculate = document.getElementById('Calculate')
calculate.addEventListener('click', function (event) {
    event.preventDefault();
        const amount = parseFloat(document.getElementById('mortgage-amount').value);
        const term = parseFloat(document.getElementById('mortgage-term').value) * 12;
        const rate = parseFloat(document.getElementById('interest-rate').value) / 12 / 100;

        if (isNaN(amount) || isNaN(term) || isNaN(rate)) {
            if (isNaN(amount)) {
                document.getElementById('mortgage-amount').style.borderColor = 'red';
            }
            if (isNaN(term)) {
                document.getElementById('mortgage-term').style.borderColor = 'red';
            }
            if (isNaN(rate)) {
                document.getElementById('interest-rate').style.borderColor = 'red';
            }
        } else {

        const monthlyPayment = (amount * rate) / (1 - Math.pow(1 + rate, -term));
        document.getElementById('result').innerText = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
        }
});
