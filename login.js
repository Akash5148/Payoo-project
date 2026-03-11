

document.getElementById("login-btn").addEventListener("click", function()

{
    
event.preventDefault()
const inputNumber = document.getElementById("input-number");
const contactNumber =inputNumber.value;
console.log(contactNumber);

const pinNumber =document.getElementById("Pin-number");
const pinValue =pinNumber.value;
console.log(pinValue);

if (contactNumber == "01712345678" && pinValue =="1234" )
{
    alert(" login successful");
    window.location="homepage.html"

}
else{
    alert("Login Failed");
    return;
}

});