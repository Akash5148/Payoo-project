//cash out logic
document.getElementById("CashOut-btn").addEventListener("click",function()

{
const agentNumber= document.getElementById("Agent-number");
const cashoutNumber =agentNumber.value;
console.log(cashoutNumber);
if(cashoutNumber.length != 11){
    alert("invalid agent number. please give a valid number");
    return;
}
const amountNumberInput =document.getElementById("Amount-number");
const amountNumber = amountNumberInput.value;
console.log(amountNumber);

const balanceElement =document.getElementById("balanace");
const balanance =balanceElement.innerText;
console.log(balanance)

const newBalance = Number(balanance) - Number(amountNumber);

if( newBalance< 0){

    alert("invalid amount");
    return ;
}



const pinNumberInput =document.getElementById("Pin-number");
const pinNumber =pinNumberInput.value;
if(pinNumber == "1234"){
alert("congratulations! Cash out successful");
console.log(newBalance);
 balanceElement.innerText =newBalance;

}
else{
    alert("invalid pin");
    return
}

});