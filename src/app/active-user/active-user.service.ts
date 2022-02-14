import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserModel } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class ActiveUserService {

  private users:Array<UserModel>;
  // private authHttp: AuthHttp;
  constructor(private http:HttpClient) { }

  public getActiveUsers():Observable<UserModel[]>{
    return this.http.get<UserModel[]>("http://localhost:9090/getActiveUsers");
  }

}
