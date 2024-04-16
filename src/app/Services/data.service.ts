import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) { }

  getDetails(){
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }
  
  login(username: string, password: string) {
    return this._http.post('https://jsonplaceholder.typicode.com/users', { username, password });
  }
  
}
