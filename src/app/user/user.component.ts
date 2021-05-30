import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface userInterface{
  name : string;
  email : string;
  id : number;
  isColor : boolean;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user : userInterface;

  @Output() userEvent : EventEmitter<userInterface>;

  isColored : boolean = false;

  constructor() {
    this.user = {} as userInterface;
    this.userEvent = new EventEmitter<userInterface>();

  }

  ngOnInit(): void {
    this.isColored = this.user.isColor ? true : false;
    console.log(this.user.isColor)
  }

  sendUserEvent():void{
    this.userEvent.emit(this.user);
  }

}
