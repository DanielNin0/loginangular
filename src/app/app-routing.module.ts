import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./component/login/login.component";
import { PrincipalComponent } from "./component/principal/principal.component";

const routes: Routes = [
  {path:'', redirectTo:'index', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'index', component:PrincipalComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent =[ LoginComponent, PrincipalComponent]
