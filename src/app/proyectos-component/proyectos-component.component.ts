import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleado.service';
import { empleados } from '../empleado.models';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent {

  constructor(private route: Router, private miServicio: ServicioEmpleadosService, private empleadoService: EmpleadosService) {

  }
  empleados: empleados[] = []

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
    this.route.navigate([''])

  }

  ngOnInit(): void {
    this.empleados = this.empleadoService.empleados

  }
}
