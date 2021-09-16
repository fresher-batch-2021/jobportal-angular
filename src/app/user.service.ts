import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private restService:RestService) { }
  
  getUserData(){
    return this.restService.getAllData('register');
  }

  


  getJobs(){
    return this.restService.getAllData('jobs')
  }


}
