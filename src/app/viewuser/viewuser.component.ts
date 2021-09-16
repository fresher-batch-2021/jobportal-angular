import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  users:any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.userService.getUserData().subscribe((res:any)=>{
      
    let data=res.rows;
    let value = data.map((obj:any)=>obj.doc)
    console.table(value);
    this.users=value
    })
  }

}
