import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleado.service';
import { empleados } from '../empleado.models';
@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent {
  constructor(private route: Router, private router: ActivatedRoute, private miServicio: ServicioEmpleadosService, private empleadoService: EmpleadosService) {

  }
  empleados: empleados[] = []
  nombre: string = ""
  apellido: string = ""
  cargo: string = ""
  salario: number = 0
  indice: number = 0
  accion: number = 0;
  addEmpleado() {
    this.empleadoService.agregarEmpleadoServicio(new empleados(this.nombre, this.apellido, this.cargo, this.salario))
    // this.miServicio.muestraMensaje('NOMBRE DE EMPLEADO: '+this.nombre)
    this.nombre = "";
    this.apellido = "";
    this.cargo = "";
    this.salario = 0;
    this.route.navigate([''])

    // }
    // modificarEmpleado(){
    //   this.empleadoService.modificarEmpledo(this.indice, this.nombre, this.apellido, this.cargo, this.salario)
    //   this.route.navigate([''])
    // }
    // eliminaEmpleado(){
    //   this.empleadoService.eliminaEmpleado(this.indice)
    //   this.route.navigate([''])
    // }
  }
    modificarEmpleado() {
      if (this.accion == 1) {
        this.empleadoService.modificarEmpledo(this.indice, this.nombre, this.apellido, this.cargo, this.salario)
        this.route.navigate([''])

      } else if (this.accion == 2) {
        this.empleadoService.eliminaEmpleado(this.indice)
      }

      this.route.navigate([''])

    }
    ngOnInit(): void {
      this.accion = parseInt(this.router.snapshot.queryParams["accion"]);
      this.empleados = this.empleadoService.empleados;
      this.indice = this.router.snapshot.params['id'];
      let empleado: empleados = this.empleadoService.encontrarEmpleado(this.indice)
    this.nombre = empleado.nombre
    this.apellido = empleado.apellido
    this.salario = empleado.salario
    this.cargo = empleado.cargo

    }

  }
