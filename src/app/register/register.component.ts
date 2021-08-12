import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  function register() {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmpassword = document.querySelector("#confirmpassword").value;
   
   if(email==""||email==null||email.trim()==""){
       alert("invalid name");
   }
   if(password.length<6){
       alert("password must must be 6 character");
   }
   else 
   if(password != confirmpassword){
       alert("password does not match with confirmpassword");
   }
   else{
       let registerObj={
           "name":name,
           "email":email,
           "password":password,
           "confirmpassword":confirmpassword
       };
       console.log(registerObj);
       const url="https://product-mock-api.herokuapp.com/jobportalapp/api/v1/auth/register"
       axios.post(url,registerObj).then(res=>{
           console.log(res);
           alert("Registeration is successful");
           window.location.href="login.html";
       }).catch(err=>{
           console.error(err);
           alert("Unable to register");
       });
   }
}
}