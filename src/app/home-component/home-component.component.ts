import { Component } from '@angular/core';
import { empleados } from '../empleado.models';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleado.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  title = 'listado de empleados';
  empleados: empleados[] = []
  constructor(private miServicio: ServicioEmpleadosService, private empleadoService: EmpleadosService) {
    // this.empleados = this.empleadoService.empleados
  }
  nombre: string = ""
  apellido: string = ""
  cargo: string = ""
  salario: number = 0

  addEmpleado() {
    this.empleadoService.agregarEmpleadoServicio(new empleados(this.nombre, this.apellido, this.cargo, this.salario))
    // this.miServicio.muestraMensaje('NOMBRE DE EMPLEADO: '+this.nombre)
    this.nombre = "";
    this.apellido = "";
    this.cargo = "";
    this.salario = 0;

  }

  ngOnInit(): void {
    // this.empleados= this.empleadoService.empleados
    this.empleadoService.obtenerEmpleados().subscribe(misEmpleados => {
      this.empleados=Object.values(misEmpleados)
      this.empleadoService.setEmpleados(this.empleados)
    })

  }
}
