import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ResponseI } from "../../models/response.interface";
import { PacienteI } from "../../models/paciente.interface";
import { AlertasService } from "../../service/alertas/alertas.service";
import { ApiService } from "../../service/api/api.service";

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {

  constructor(private router:Router, private api:ApiService, private alerta:AlertasService){}

  ngOnInit():void{
   
    let toke = localStorage.getItem('token');
    this.nuevoForm.patchValue({
      'token': toke
    })
  }

  nuevoForm = new FormGroup({
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

  
  salir(){
    this.router.navigate(['index']);
  }

  postForm(form:any){
    
    this.api.postPatients(form).subscribe(data=>{
      let respuesta:ResponseI = data;
      if (respuesta.status == "ok"){
        this.alerta.showSuccess('Paciente agregado', 'Hecho')
        this.router.navigate(['index']);
      }else{
        this.alerta.showError('respuesta.result.error_msg', 'Error');
        
      }
    })
  }
}
