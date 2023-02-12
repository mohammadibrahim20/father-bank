// step: event hadler 1
console.log('connectd')
document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    const withdrawElement = document.getElementById("witdhraw-input");
    const withdrawString = withdrawElement.value;
    const withdraw = parseFloat(withdrawString);

    const widrawOutputElement = document.getElementById('withdraw-amount');
    const widrawOutputString = widrawOutputElement.innerHTML;
    const widrawOutput = parseFloat(widrawOutputString);

    const totalWithdrawOutput = withdraw + widrawOutput;
    widrawOutputElement.innerText= totalWithdrawOutput;


    const totalBlance = document.getElementById('blance');
    const totalAmountString = totalBlance.innerText;
    const totalAmount = parseFloat(totalAmountString);
   
    
    const currentTotalAmount = totalAmount- withdraw;
    totalBlance.innerText = currentTotalAmount;
    withdrawElement.value = "";
    

   
})