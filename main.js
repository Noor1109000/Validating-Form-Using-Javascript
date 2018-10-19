function validationForm(){
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;
    let mb = document.getElementById("mb").value;
    let email = document.getElementById("email").value;

    

    let errUser = document.getElementById("username");
    let errPass = document.getElementById("pass");
    let errConPass = document.getElementById("conpass");
    let errMb = document.getElementById("mobile");
    let errEmail = document.getElementById("emailId");


//Username validation

    if(user == ""){
        errUser.innerHTML = "** Please enter your validate username";
        return false;

    }
    if((user.length<=2)||(user.length>20)){
        errUser.innerHTML = "** Username Must be a character between 1 to 20";
        return false;
    }

    if(!isNaN(user)){
        errUser.innerHTML = "** Only characters are allowed";
        return false;
    }







//Password Validation

   if(password == ""){
        errPass.innerHTML = "** Please enter your validate password";
        return false;

    }
    if((password.length<=5)||(password.length>20)){
        errPass.innerHTML = "** Must be a password between 5 to 20";
        return false;
    }

    if(isNaN(password)){
        errPass.innerHTML = "** Only numbers are allowed";
        return false;
    }




//Password Matching confirmation

    if(password != cpassword){
        errConPass.innerHTML = "** Confirm password are not matched";
        return false;
    }

   if(cpassword == ""){
    errConPass.innerHTML = "** Please enter your validate Confirm password";
        return false;

    }



//Mobile Number Validation

   if(mb == ""){
         errMb.innerHTML = "** Please enter your validate Mobile Number";
        return false;

    }

    if(isNaN(mb)){
        errMb.innerHTML = "** You must be entered only the numbers";
        return false;

    }
    if(mb.length!=11){
        errMb.innerHTML = "** Must use only the 10 digits mobile numbers";
        return false;
    }





//Email Validation

   if(email == ""){
    errEmail.innerHTML = "** Please enter your validate email";
        return false;

    }
    if(email.indexOf('@') <= 0){
        errEmail.innerHTML = "** Invalid position of @";
        return false;
    }
    if((email.charAt(email.length -4)!= '.')&&(email.charAt(email.length -3)!= '.')){
        errEmail.innerHTML = "** Invalid position of Dot (.)";
        return false;
    }
}