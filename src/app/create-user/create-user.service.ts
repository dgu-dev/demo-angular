import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

import { RestResponse } from '../model/restResponse.model';
import { UserModel } from '../model/user.model';

@Injectable()
export class CreateUserService {

  constructor(private http:HttpClient) { }

  public validate(user: UserModel){
    let isValid = true;

    if(!user.nombre){
      isValid = false;
    }
    if(!user.edad){
      isValid = false;
    }
    if(!user.activo){
      isValid = false;
    }
    return isValid;
  }
  public saveOrUpdate(user: UserModel): Observable<RestResponse>{
    return this.http.post<RestResponse>("http://localhost:9090/saveOrUpdate",JSON.stringify(user));
  }
}
