// step: event hadler 1
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step: 2 get the deposit amount from the deposit field
    const depositField = document.getElementById('deposit-input');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    
    // step 3: get the deposit total current amount
    const depositTotalElement = document.getElementById('Deposit-total');
    const previousDepositTotalSring = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalSring);
    
    const currentDepositTotal = previousDepositTotal+ newDepositAmount;

    
    const totalBlance = document.getElementById('blance');
    const totalAmountString = totalBlance.innerText;
    const totalAmount = parseFloat(totalAmountString);
   
    
    const currentTotalAmount = totalAmount+ newDepositAmount;
    totalBlance.innerText = currentTotalAmount;
    
    depositTotalElement.innerText = currentDepositTotal;
    // deposit field empty string
    depositField.value="";

})