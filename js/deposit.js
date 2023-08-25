// step-1 Add event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2 get the deposit amount from the deposit input field 
    // for input field use .value to the inside the input field 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // step-3 get the current deposit total 
    // for non-input (element other than input, textarea)use innerText to get the text 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousdepositTotalString = depositTotalElement.innerText;
const previousdepositTotal=parseFloat(previousdepositTotalString);
// step-4 add numbers to set the total deposit 
    const currentDepositTotal = previousdepositTotal + newDepositAmount;
    // set the deposit total 
    depositTotalElement.innerText = currentDepositTotal;

    // step-5 get ballance current total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6 calculatecurrent total balance 
    const currentBalanceTotal=previousBalanceTotal+newDepositAmount;
    // set the balance total 
    balanceTotalElement.innerText=currentBalanceTotal;
    // step-7 clear the text of input value 
    depositField.value = '';
})