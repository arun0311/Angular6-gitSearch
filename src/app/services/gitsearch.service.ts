import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {

  private userName: string = 'arun0311';
  private clientid = '289f13f3236d93bc2c32';
  private clientsecret = '54f6458a0688b459473bc48a1aef0286976a1bc3';

  constructor( private http: HttpClient, ) {
    console.log("in service");
  }

  /** GET ProfileInfo from the github */
  getProfileInfo(): Observable<any> {
    return this.http.get("https://api.github.com/users/" + this.userName + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(res => res));
  }

}
