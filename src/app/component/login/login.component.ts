import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ApiService } from "../../service/api/api.service";
import { LoginI } from "../../models/login.interface";
import { ResponseI } from "../../models/response.interface";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm= new FormGroup({
    usuario : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  constructor(private api:ApiService, private router:Router){}

  errorStatus:boolean =false;
  errormsg:any = "";

  ngOnInit(): void{ }

  onLogin(form:LoginI){
    if(this.loginForm.invalid){
      Object.values(this.loginForm.controls).forEach(control=>{
        control.markAllAsTouched();
      })
      return ;
    }
    this.api.loginByEmail(form).subscribe(data =>{
     let dataResponse:ResponseI =data;
     if (dataResponse.status == "ok") {
        localStorage.setItem("token", dataResponse.result.token);
        this.router.navigate(['index']);
     }else{
      this.errorStatus = true;
      this.errormsg = dataResponse.result.error_msg;
     }
   });
  
  }

  public get validar():any{
    return this.loginForm.controls;
  }

}
