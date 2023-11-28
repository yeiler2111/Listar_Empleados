import { Component } from '@angular/core';
import { empleados } from './empleado.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listado de empleados';
  nombre:string=""
  apellido:string=""
  cargo:string=""
  salario:number=0

  empleados:empleados[]=[
    new empleados("juan","diaz","presidente",7500),
    new empleados("yeiler","simons","delegado",2510),
    new empleados("david","simons","arquitecto",6580),
    new empleados("carlos","ejemplo","obrero",15000),
  ];

  addEmpleado(){
    this.empleados.push(new empleados(this.nombre, this.apellido, this.cargo, this.salario));
    this.nombre="";
    this.apellido="";
    this.cargo="";
    this.salario=0;

  }
}
