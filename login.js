

document.getElementById("login-btn").addEventListener("click", function(event)

{
    
event.preventDefault();
const inputNumber = document.getElementById("input-number");
const contactNumber =inputNumber.value;
//console.log(contactNumber);
if(contactNumber == ""){
    alert("Please Enter a Valid Number");
    return ;
}

const pinNumber =document.getElementById("Pin-number");
const pinValue =pinNumber.value;
//console.log(pinValue);

if ( pinValue =="1234" )
{
    alert(" login successful");
    
    window.location.href = "homepage.html"

}
else{
    alert("Login Failed");
    return;
}

});