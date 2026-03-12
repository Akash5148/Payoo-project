


// function for input value
function getInputValue(id) {

    const input = document.getElementById(id);
    const value = input.value;
    return value;



};

//cashout
document.getElementById("CashOut-btn").addEventListener("click", function () {
    const agentNumber = getInputValue("Agent-number");

    if (agentNumber.length !=11) {
        alert("Enter a valid agent number");
        return;
    }

    const amountNumber = getInputValue("Amount-number");
    //balance
    const balanceElement = document.getElementById("balanace");
    const balance = balanceElement.innerText;
    const newBalance = Number(balance) - Number(amountNumber);
    
        if (newBalance < 0) {
            alert("invalid Amount");
            return;
        }

    


    const pin = getInputValue("Pin-number");
    if (pin === "1234") {
        alert("congratulations ! cashout successful");
        balanceElement.innerText =newBalance;
        return newBalance
    }
    else {
        alert("Enter valid pin ");
        return;
    }





});
