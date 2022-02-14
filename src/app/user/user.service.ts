import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserModel } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  private users:Array<UserModel>;
  // private authHttp: AuthHttp;
  constructor(private http:HttpClient) { }

  public getUsers():Observable<UserModel[]>{
    return this.http.get<UserModel[]>("http://localhost:9090/getUsers");
  }
  public delete(user: UserModel): void{
    this.http.post("http://localhost:9090/deleteUser",JSON.stringify(user)).subscribe();
    this.getUsers();
  }

}
