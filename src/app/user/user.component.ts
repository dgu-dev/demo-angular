import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserModel } from '../model/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
private users:Array<UserModel>;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.loadUsers();
  }
//metodos
  private loadUsers():void {
    this.userService.getUsers().subscribe(res => {
      this.users = res;
      console.log(res);
    });
  }

  public edit (user:UserModel):void {
    sessionStorage.setItem('user',JSON.stringify (user));
    this.router.navigate(["/createUserComponent"]);
  }
  public delete(user:UserModel):void{
    this.userService.delete(user);
    this.router.navigate(['/userComponent']).then(() => {window.location.reload()});
  }

}
