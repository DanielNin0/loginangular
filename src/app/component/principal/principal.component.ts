import { Component } from '@angular/core';
import { ApiService } from "../../service/api/api.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  constructor(private api:ApiService){}

  ngOnInit(): void{
    this.api.getAllPatients(1).subscribe(data=>{
      console.log(data);
    })
  }
}
