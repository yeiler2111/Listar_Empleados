import { Component, Input } from '@angular/core';
import { empleados } from '../empleado.models';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent {
@Input() empleadoDeLista:empleados;
@Input() indice:number;

arrayCaracteristicas = ['']
addNewItem(nuevaCaracteristica:string){
  this.arrayCaracteristicas.push(nuevaCaracteristica)
}

}
