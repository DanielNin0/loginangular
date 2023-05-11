import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { PacienteI } from "../../models/paciente.interface";
import { ApiService } from "../../service/api/api.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { ResponseI } from "../../models/response.interface";
import { AlertasService } from "../../service/alertas/alertas.service";


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  constructor(private activerouter:ActivatedRoute, private api:ApiService, private alertas:AlertasService, private router:Router){}

  datosPacientes!: PacienteI;

  editarform = new FormGroup({
    nombre: new FormControl(''),
    correo: new FormControl(''),
    dni: new FormControl(''),
    direccion: new FormControl(''),
    codigoPostal: new FormControl(''),
    genero: new FormControl(''),
    telefono: new FormControl(''),
    token: new FormControl(''),
    pacienteId: new FormControl(''),
    fechaNacimiento: new FormControl('')
});

  ngOnInit():void{
    let pacienteid = this.activerouter.snapshot.paramMap.get('id');
    let toke = this.getToken();
    this.api.getSinglePatients(pacienteid).subscribe(data=>{
      if (Array.isArray(data) && data.length > 0) {
        this.datosPacientes = data[0] as PacienteI;
        this.editarform.setValue({
          'nombre': this.datosPacientes.Nombre,
          'correo':this.datosPacientes.Correo,
          'dni': this.datosPacientes.DNI,
          'direccion': this.datosPacientes.Direccion,
          'codigoPostal': this.datosPacientes.CodigoPostal,
          'genero': this.datosPacientes.Genero,
          'telefono': this.datosPacientes.Telefono,
          'token': toke,
          'pacienteId': pacienteid,
          'fechaNacimiento': this.datosPacientes.FechaNacimiento
        });
       
      }
    });
  }


  getToken(){
    return localStorage.getItem('token');
  }

  postform(form:any){
    this.api.putPatients(form).subscribe(data=>{
      let respuesta:ResponseI = data;
      if (respuesta.status == "ok"){
        this.alertas.showSuccess('Datos Modificados', 'Hecho')
        this.router.navigate(['index']);
      }else{
        this.alertas.showError(respuesta.result.error_msg, 'Error');
        
      }
    })
  }

  eliminar(form:any){
    this.api.deletePatients(form).subscribe(data=>{
      let respuesta:ResponseI = data;
      if (respuesta.status == "ok"){
        this.alertas.showSuccess('Paciente Eliminado', 'Datos Eliminados');
        this.router.navigate(['index']);
      }else{
        this.alertas.showError(respuesta.result.error_msg, 'Error');
        
      }
    })
  }

  salir(){
    this.router.navigate(['index']);
  }
}
