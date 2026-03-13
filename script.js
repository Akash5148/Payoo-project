

// function for input value
function getInputValue(id) {

    const input = document.getElementById(id);
    const value = input.value;
    return value;



};

//fuction for balance
function getBalance() {
    const balanceElement = document.getElementById("balanace");
    const balance = balanceElement.innerText;
    return Number(balance);
}
//function for set balanace
function setBalanace(value) {
    const balanceElement = document.getElementById("balanace");
    balanceElement.innerText = value;
}



// show only function

function showonly(id){
const addmoney =document.getElementById("add-money");
 const CashOut =document.getElementById("Cashout");
const sendmoney =document.getElementById("Transfer-money")
const paymoney =document.getElementById("pay-money")
const transactions =document.getElementById("history")
const bonass =document.getElementById("bonas")
//hide the sectuin
 addmoney.classList.add("hidden");
 CashOut.classList.add("hidden");
 sendmoney.classList.add("hidden");
 paymoney.classList.add("hidden");
 transactions.classList.add("hidden");
 bonass.classList.add("hidden");
 

 //show the cliked section
  const selected = document.getElementById(id);
   selected.classList.remove("hidden");
}



//cashout
document.getElementById("CashOut-btn").addEventListener("click", function () {
   

  
    const agentNumber = getInputValue("Agent-number");

    if (agentNumber.length != 11) {
        alert("Enter a valid agent number");
        return;
    }

    const amountNumber = getInputValue("Amount-number");
    //balance
    const currentBalanace = getBalance();

    const newBalance = Number(currentBalanace) - Number(amountNumber);

    if (newBalance < 0) {
        alert("invalid Amount");
        return;
    }




    const pin = getInputValue("Pin-number");
    if (pin === "1234") {
        alert(`Congratulations! $ ${amountNumber} Cashout successful`);

        setBalanace(newBalance);
const history =document.getElementById("history-container");

const historyCard =document.createElement("div");
historyCard.innerHTML =` <div class="card bg-base-100 w-full  rounded-2xl p-5 bg-blue-300 ">
<p>Congratulations!</p> 
Cashout successful to :${agentNumber} Amount $ ${amountNumber}
at ${new Date()} </div>
`
history.appendChild(historyCard);
    }
    else {
        alert("Enter valid pin ");
        return;
    }





});
//add money
document.getElementById("add-btn").addEventListener("click",function()
{
   

const bankAccount =getInputValue("add-money-bank");
if(bankAccount =="Select A Bank")
{
    alert("please select a Bank Account");
    return;
}

const accountNumber =getInputValue("Bank Account-number")

if(accountNumber.length !=11)
{
alert("Invalid Account Number")
}
 const addAmount =getInputValue("Amount-to add");

const newBalance =getBalance() + Number(addAmount);


 

const pinNum =getInputValue("add-Pin-number")
if(pinNum==="1234")
{
    alert(`congratulations! $ ${addAmount} Add money successful  from 
    ${bankAccount} at ${new Date()}`);

        setBalanace(newBalance);


        const history =document.getElementById("history-container");

const historyCard =document.createElement("div");
historyCard.innerHTML =` <div class="card bg-base-100 w-fullmb-10  rounded-2xl p-5 bg-blue-300 ">
<p>Congratulations!</p> 
<p>Add money successful from :${bankAccount}Bank Amount $ ${addAmount} Account No-${accountNumber}
at ${new Date()}</p></div>
`
history.appendChild(historyCard);
}
else {
    alert("Invalid Pin");
}

});
//money transfer part
document.getElementById("transfer-btn").addEventListener("click",function()
{
   
const sendUserNumber =getInputValue("user-number");
if(sendUserNumber.length != 11)
{
    alert("Enter a valid user Number");
    return;
}
const sendAmount =getInputValue("Amount-to send");
 const newBalance =getBalance() - sendAmount;
 if(newBalance < 0)
 {
    alert("Invalid amount");
    return;
 }

 const pin =getInputValue("send-Pin-number")
 if(pin==="1234")
 {
    alert(`Congratulations! $ ${sendAmount} sendmoney successful.`);
    setBalanace(newBalance);

    const history =document.getElementById("history-container");

const historyCard =document.createElement("div");
historyCard.innerHTML =` <div class="card bg-base-100 w-full  rounded-2xl p-5 bg-blue-300 ">
<p>Congratulations!</p> 
Money Transfer successful to :${sendUserNumber} Amount $ ${sendAmount}
at ${new Date()} </div>
`
history.appendChild(historyCard);

   
 }
 else{
    alert("Enter valid pin");
    return ;
 }

});
// pay part 
document.getElementById("pay-btn").addEventListener("click",function() 

{
    const paymentGoes =getInputValue("pay-money-bill");
    if(paymentGoes == "Select To Pay"){

        alert("Please Select a payment pay biller");
        return ;
    }

const paymentNumber =getInputValue("Biller-Account-number")
if(paymentNumber.length != 11)
{
    alert("Invalid Account Number ");
    return;
}
const payAmount =getInputValue("Amount-to pay");
const newBalance =getBalance()- payAmount ;
if(newBalance <0){

    alert("Invalid amount");
    return;

}
const payPin= getInputValue("pay-Pin-number");
if(payPin ==="1234"){
    alert(`Congratulations! ${paymentGoes} $ ${payAmount} payment successful`);
    setBalanace(newBalance);


    const history =document.getElementById("history-container");

const historyCard =document.createElement("div");
historyCard.innerHTML =` <div class="card bg-base-100 w-fullmb-10  rounded-2xl p-5 bg-blue-300 ">
<p>Congratulations!</p> 
<p> ${paymentGoes} Payment successful  total Bill $ ${payAmount} Account No-${paymentNumber}  
at ${new Date()}</p></div>
`
history.appendChild(historyCard);
    


}
else{
    alert("Invaid Pin");
    return;
}

});

// bonas part


document.getElementById("bonas-btn").addEventListener("click",function(){




    if(localStorage.getItem ("isBonasTaken"))
    {
        alert("You have already claimed your bonus today!");
        return;
    }
const getCopun =document.getElementById("Copon");
const getCopunValue =getCopun.value;
if( getCopunValue==="payoo")
{
   
    const newBalance =getBalance() + 100 ;
    setBalanace(newBalance);

    localStorage.setItem("isBonusTaken", "true");
     alert("claimed the bonas $ 100");
     this.disabled = true;


     
    const history =document.getElementById("history-container");

const historyCard =document.createElement("div");
historyCard.innerHTML =` <div class="card bg-base-100 w-fullmb-10  rounded-2xl p-5 bg-blue-300 ">
<p>Congratulations!</p> 
<p>  You have claimed the $100 bonus.
at ${new Date()}</p></div>
`
history.appendChild(historyCard);
}
else{
    alert("Invalid Copun"); return;
}


});

