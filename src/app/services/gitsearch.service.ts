import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {

  private userName: string;
  private clientid = '289f13f3236d93bc2c32';
  private clientsecret = '54f6458a0688b459473bc48a1aef0286976a1bc3';

  constructor( private http: Http ) { 
    console.log("in service");
    this.userName = "arun0311";
  }

  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.userName + "?client_id=" + this.userName + "&client_secret=" + this.clientsecret)
    .pipe(map(res => res.json()));
  }
}
