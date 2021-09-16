import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  company:any;
 

  constructor(private userService:UserService,private route:Router) { }

  ngOnInit(): void {
    this.getAllJobs()
  }
  getAllJobs(){
    this.userService.getJobs().subscribe((res:any)=>{
      
    let data=res.rows;
    let value = data.map((obj:any)=>obj.doc)
    console.table(value);
    this.company=value
    })
  }
  companyAssets(companyName:string){
    this.route.navigate(['/company-candidates',companyName])
  }
}
