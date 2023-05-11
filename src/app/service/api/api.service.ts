import { Injectable } from '@angular/core';
import { LoginI } from "../../models/login.interface";
import { ResponseI } from "../../models/response.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ListapacienteI } from "../../models/listapacientes.interface";
import { PacienteI } from "../../models/paciente.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = 'http://localhost/apirest/';

  constructor(private http:HttpClient) { }

  

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "auth";
    
    return this.http.post<ResponseI>(direccion, form);
  }


  getAllPatients(page:number):Observable<ListapacienteI[]>{
    let direccion = this.url + "pacientes?page=" + page;
    return this.http.get<ListapacienteI[]>(direccion);
  }


  getSinglePatients(id: string | null):Observable<PacienteI>{
    let direccion = this.url + "pacientes?id=" + id;
    return this.http.get<PacienteI>(direccion);
  }


  putPatients(form:PacienteI):Observable<ResponseI>{
   let direccion = this.url + "pacientes" ;
   return this.http.put<ResponseI>(direccion, form);
  }

  deletePatients(form:PacienteI):Observable<ResponseI>{
    let direccion = this.url + "pacientes" ;
    let Options={
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      body: form
    }
    return this.http.delete<ResponseI>(direccion, Options);
  }

  postPatients(form:PacienteI):Observable<ResponseI>{
    let direccion = this.url + "pacientes";
    let Options={
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      body: form
    }

    return this.http.post<ResponseI>(direccion,form,Options);
  }


}
