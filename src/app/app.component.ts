import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mtb app this is test Angular';
  empObj ={
    name : "osman",
    id : 2765,
    org : "MTB"
  };

  userObj ={
    name :"osman",
    email :"abcd",
    id : 1,
    isColor :true
  }

  showUser : boolean = false;
  testdt = new Date();

  constructor(private httpsrv : HttpService){
  }

  posts : any = this.httpsrv.srvGetRequest('https://jsonplaceholder.typicode.com/posts');

  testFunc(){
    this.httpsrv.srvGetRequest('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((Response)=> this.empObj=Response);
  }

  handleEvent(event:any):void{
    console.log(event);
  }

  getPost():void{
    this.httpsrv.srvGetRequest('https://jsonplaceholder.typicode.com/posts')
      .subscribe((Response)=> this.posts=Response);
  }

  ngOnInit(){
   // this.getPost();
  }
}
