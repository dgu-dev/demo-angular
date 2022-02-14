import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveUserComponent } from './active-user/active-user.component';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {path:'', redirectTo:'/userComponent',pathMatch:'full'},
    {path:'appComponent',component:AppComponent},
    {path:'userComponent',component:UserComponent},
    {path:'createUserComponent',component:CreateUserComponent},
    {path:'activeUserComponent',component:ActiveUserComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
