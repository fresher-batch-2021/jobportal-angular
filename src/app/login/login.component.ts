import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  function login() {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
if(email ==""||email ==null||email.trim()==""){
    alert("invalid username");
} else{
    if(password.trim()!=""){
        const loginobj={
            "email":email,
           "password":password
};
const url="https://product-mock-api.herokuapp.com/jobportalapp/api/v1/auth/login"
console.log(loginobj);
axios.post(url,loginobj).then(res=>{
    console.log(res);
    localStorage.setItem("usrEmail",email);//savin email in local storage
    alert("login succesful");
    // alert(localStorage.getItem("usrEmail"));
    window.location.href="index.html";
}).catch(err=>{
    console.log(err.response.data);
    if(err.response.data.errormessage){
        alert(err.response.data.errormessage);
    }
    else{
        alert("login failed");
    }
});    
}
else{
    alert("password is invalid");
}
}
}
    
}
