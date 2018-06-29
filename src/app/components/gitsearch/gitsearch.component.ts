import { Component, OnInit } from '@angular/core';
import { GitsearchService } from '../../services/gitsearch.service';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

  public responseData:any;
  public userImage:any;
  public repositorys:any;
  public followers:any;

  constructor( private service:GitsearchService) { }

  ngOnInit() {
    // this.response = 
    this.service.getProfileInfo().subscribe( (response:any) => {
      this.responseData = response;
      console.log('response',this.responseData);
    })
    
    if (this.responseData != undefined && this.responseData != null ) {
    this.userImage = this.responseData.avatar_url
    this.repositorys = this.responseData.public_repos
    this.followers = this.responseData.followers_url
    }
  }
}
