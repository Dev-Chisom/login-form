// const togglePassword = document.querySelector('#togglePassword');
// const password = document.querySelector('#password');


// togglePassword.addEventListener('click', function (e) {
//     // toggle the type attribute
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);
//     // toggle the eye slash icon
//     this.classList.toggle('fa-eye-slash');
// });



const validation = () =>{
    const user = document.getElementById('user').value;
    const firstUser = document.getElementById('firstuser').value;
    const pass = document.getElementById('pass').value;
    const conpass = document.getElementById('conpass').value;
    const email = document.getElementById('email').value;
    

    if(user === ""){
        // alert ('please fill')
         document.getElementById('usernames').innerHTML = "**Please enter your name";
        return false;
    }
     if((user.length <= 3) || (user.length > 20)){
        document.getElementById('usernames').innerHTML = "**Please enter a name between 2 and 20";
        return false;  
    }
    if(!isNaN(user)){
        document.getElementById('usernames').innerHTML = "**Please enter your password";
        return false;
    }

    if(firstUser === ""){
        // alert ('please fill')
     document.getElementById('userNames').innerHTML = "**Please enter your name";
        return false;
    }
    if((firstUser.length <= 3) || (firstUser.length > 20)){
        document.getElementById('userNames').innerHTML = "**Please enter a name between 2 and 20";
        return false;  
    }
    if(!isNaN(firstUser)){
        document.getElementById('userNames').innerHTML = "**Please enter your password";
        return false;
    }


    if((pass.length <= 8) || (pass.length > 20)){
        document.getElementById('passwords').innerHTML = "**Please enter a length between 8 and 20";
        return false;  
    }
    if(pass === ""){
        document.getElementById('confirmpass').innerHTML = "**Please enter your password";
        return false;
    }
    if(pass !== conpass){
        document.getElementById('passwords').innerHTML = "**Password are not match";
        return false;  
    }
    if(conpass === ""){
        document.getElementById('confirmpass').innerHTML = "**Please confirm your password";
        return false;
    }



    if(email == "") {
        document.getElementById('emails').innerHTML = "**Please enter your email";
        return false;
    }
    if(email.indexOf('@')<= 0){
        document.getElementById('emails').innerHTML = "**@ Invalid Position";
        return false;
    }
    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.getElementById('emails').innerHTML = "**. Invalid Position";
        return false;
    }
}

