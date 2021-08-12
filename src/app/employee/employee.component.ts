import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  function employee() {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const keyskills = document.querySelector("#keyskills").value;
    // const projects = document.querySelector("#projects").value;
    const education = document.querySelector("#education").value;
    
    const resume = document.querySelector("#myFile").value;

    const dateofbirth = document.querySelector("#dateofbirth").value;
    const mobileno = document.querySelector("#mobileno").value;
    if(mobileno.length>10){
        window.alert("Please enter the 10 digit mobile no");
        
    }
    // const ctc = document.querySelector("#ctc").value;
    // const expected_CTC = document.querySelector("#expected_CTC").value;
    console.log(name + " " + keyskills  + "" + education  + "" + dateofbirth + "" + mobileno);
    let userobj = {
        "name": name,
        "keyskills": keyskills,
        // "projects": projects,
        "education": education,
        "resume": resume,
        "dateofbirth": dateofbirth,
        "mobileno": mobileno
        // "ctc": ctc,
        // "expected_CTC": expected_CTC
    }
    console.log(userobj);
   
//    console.log(x);
    alert("Your Response saved Successfully");
    // window.location.href = "index.html";
}


function myFunction(){
    let fileName='';
var x = document.getElementById("myFile");
var txt = "";
if ('files' in x) {
// alert(x);
if (x.files.length == 0) {
txt = "Select one or more files.";
} else {
for (var i = 0; i < x.files.length; i++) {
  txt += "<br><strong>" + (i+1) + ". file</strong><br>";
  var file = x.files[i];
  if ('name' in file) {
    txt += "name: " + file.name + "<br>";
    // alert(file.name);
    // console.log(file.name);
     fileName=file.name;
  }
  if ('size' in file) {
    txt += "size: " + file.size + " bytes <br>";
  }
}
}
} 
else {
if (x.value == "") {
txt += "Select one or more files.";
} else {
txt += "The files property is not supported by your browser!";
txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
}
}
document.getElementById("demo").innerHTML = txt;
return(fileName);
}
}
