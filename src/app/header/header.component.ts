import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }
  isLoggedIn:boolean=true;
  ngOnInit(): void {
    this.isLoggedIn =localStorage.getItem('isLoggedIn')!=null?true:false;
  console.log(this.isLoggedIn)  
  }
  logout(){
    localStorage.clear();
    this.route.navigate(['/login'])
  }

}
