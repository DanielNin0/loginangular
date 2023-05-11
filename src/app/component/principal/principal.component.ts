import { Component } from '@angular/core';
import { ApiService } from "../../service/api/api.service";
import { Router } from "@angular/router";
import { ListapacienteI } from "../../models/listapacientes.interface";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

 

  constructor(private api:ApiService, private router:Router){}

  pacientes: ListapacienteI[] = [];

  ngOnInit(): void{
    this.api.getAllPatients(1).subscribe(data=>{
      this.pacientes = data;
    })
  }

  editarPaciente(id: any){
    this.router.navigate(['editar', id]);
  }
  nuevoPaciente(){
    this.router.navigate(['nuevo']);
  }
}
