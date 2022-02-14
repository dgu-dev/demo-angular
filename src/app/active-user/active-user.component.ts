import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserModel } from '../model/user.model';
import { ActiveUserService } from './active-user.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css'],
  providers: [ActiveUserService]
})
export class ActiveUserComponent implements OnInit {
  private activeusers:Array<UserModel>;
  constructor(private activeUserService:ActiveUserService, private router:Router) { }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers() {
    this.activeUserService.getActiveUsers().subscribe(res => {
      this.activeusers = res;
      console.log(res);
    });
  }
}
