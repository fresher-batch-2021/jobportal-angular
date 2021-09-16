import { Component, OnInit } from '@angular/core';
import axios from 'axios'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }
  registerName:string="";
  registerEmail:string="";
  registerPassword:string="";
  registerConfirm:string="";
  
  register() {
    let name=this.registerName;
    let email=this.registerEmail;
    let password=this.registerPassword;
    let confirm=this.registerConfirm;
    // event.preventDefault();
    //alert("hello");
    
    //if name is valid or not
    if (name.trim() == ""||name==null) {
        alert("name can't be empty");
        return;
    }
    if (password.length < 8) {
        alert("password is less than 8 charectors");
        return;
    }
    else if (password != confirm) {
            alert("password doesnot match");
            return;
        }  
        else {
             // backend
             let registerObj = {
                "name": name,
                "email": email,
                "password": password,
                "role": "USER"
            };

        console.log(registerObj); //for printing in console 

      const url = "https://product-mock-api.herokuapp.com/jobportalapp/api/v1/auth/register";//registration url
      axios.post(url, registerObj).then(res => {

                console.log(res);//printing in console // for user purpose
                alert("Registration is succesful");
                window.location.href = "login.html";
            }).catch(err => {
                console.error(err);
                alert("Unable to register");
            });

        }
    }
    
}
