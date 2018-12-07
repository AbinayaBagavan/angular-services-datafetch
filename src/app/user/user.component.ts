import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl:'./user.component.html',
  styles:[`
  table,th,td{
    border: 1px solid black;
  }`]
})
export class UserComponent  {
  userDetails:any[];
  constructor(private userServiceData:UserService)
  {
    
  }
  ngOnInit(){
    this.userDetails=this.userServiceData.getUsers();
  }

}