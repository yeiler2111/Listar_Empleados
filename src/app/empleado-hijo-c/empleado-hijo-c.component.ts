import { Component, Input } from '@angular/core';
import { empleados } from '../empleado.models';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent {
  @Input() empleadoDeLista: empleados;
  @Input() indice: number;
  constructor(private miServicio: ServicioEmpleadosService) { }
  arrayCaracteristicas = ['']
  addNewItem(nuevaCaracteristica: string) {
    this.miServicio.muestraMensaje('seguro que deseas añadir caracteristica?')
    this.arrayCaracteristicas.push(nuevaCaracteristica)
  }


}
