var passwordC = document.getElementById("password2");
var passwordD = document.getElementById("password1");
let email = document.getElementById("email");

function confirmPassword() {
    passwordC.preventDefault();
    if (passwordC.value == passwordD.value) {
        console.log("Passwords match");
    }
    else  {
        alert("passwords do not match");
        
    }
}

lengthOfPassword();



function lengthOfPassword() {
    if (passwordC.value.length <8) {
        document.getElementById("message").innerHTML = "password please"
        document.getElementById("button1").disabled = true;
    }
    
}



document.getElementById("button1").onclick = function() {
    confirmPassword();
    
}