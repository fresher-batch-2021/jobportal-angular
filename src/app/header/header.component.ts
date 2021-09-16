import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  isLoggedIn:boolean=false;
  ngOnInit(): void {
    let value =localStorage.getItem('isLoggedIn')!=null?true:false;
    this.isLoggedIn=(value);
    console.log(value)
  }
  

}
