import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';


const endpoint = environment.endpoint;
const dbUserName = environment.dbUserName;
const dbPassword = environment.dbPassword;
const basicAuth = 'Basic '+btoa(dbUserName+':'+dbPassword);
@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http:HttpClient) { }

  getAllData(database:string){
    const url = endpoint+database+"/_all_docs?include_docs=true";
    return this.http.get(url,{headers:{Authorization:basicAuth}});
  }

}
