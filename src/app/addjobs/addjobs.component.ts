import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-addjobs',
  templateUrl: './addjobs.component.html',
  styleUrls: ['./addjobs.component.css']
})
export class AddjobsComponent implements OnInit {

  constructor(private validator:ValidationService) { }
  productName:string="";
  productPrice:number=0;
  productImage:any;
  productQuantity:number=0;
  productDescription:string="";
  file:any;
  

  ngOnInit(): void {
  }
  onFileUpload(event:any){
    this.productImage = event.target.files[0].name;
  
    }
    

}
