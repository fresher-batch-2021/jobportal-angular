import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios'
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
   
  }
  loginEmail:string="";
  loginPassword:string="";
  
  login(){
    let email=this.loginEmail;
    let password=this.loginPassword;
    // alert(this.loginEmails);
    // alert(this.loginPassword);
    // ==========================
        
switch(true){
  case (email ==""||email==null||email.trim()==""):{alert("invalid username"); break;}
  case (password.trim() == ""):{alert("password is invalid"); break;}

  default :{const loginobj = {
      "email": email,
      "password": password 
     };

      //sending data to server
      const url = "https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/register/_find";
      const dbUserName=environment.dbUserName;
      const dbPassword = environment.dbPassword;
      const  basicAuth = "Basic " + btoa(dbUserName + ":" + dbPassword);


let requestObj={
  selector:{
      email:email,
      password:password
  },
  fields:['name','email','role']
};



      console.log(loginobj);//for our verification

      axios.post(url,requestObj,{headers:{Authorization:basicAuth}}).then(res=>{
          console.table(res.data.docs);
        let data=res.data.docs[0];
        if(data==null){
          alert('login falied');
          return;
        }
        else if(data.role=='ADMIN'){
          alert("login succesful");
          this.route.navigate(['/dashboard'])}
      }).catch(err=>{
              console.log(err.response.data);
              if (err.response.data.errorMessage){
                  alert(err.response.data.errorMessage);
              }
              else{
              alert("login failed");
              }
      });
  }
}
    // ==========================

  }
}
