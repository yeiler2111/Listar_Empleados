import { Injectable } from "@angular/core";
import { empleados } from "./empleado.models";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
import { DataServices } from "./data.services";

@Injectable()
export class EmpleadosService {
  constructor(private servicioEmpleadoService: ServicioEmpleadosService, private dataServices: DataServices) {

  }

  setEmpleados(misEmpleados: empleados[]) {
    this.empleados = misEmpleados
  }
  obtenerEmpleados() {
    return this.dataServices.cargarEmpleados()
  }
  empleados: empleados[] = []

  agregarEmpleadoServicio(empleado: empleados) {
    this.servicioEmpleadoService.muestraMensaje("persona que se va a agregar" + "\n" + empleado.nombre + "\n" + empleado.salario);
    this.empleados.push(empleado);
    this.dataServices.guardarEmpleado(this.empleados);
  }

  encontrarEmpleado(indice: number) {
    let empleado = this.empleados[indice]
    return empleado

  }
  modificarEmpledo(id: number, nombre: string, apellido: string, cargo: string, salario: number) {
    this.empleados[id].nombre = nombre
    this.empleados[id].apellido = apellido
    this.empleados[id].cargo = cargo
    this.empleados[id].salario = salario
    this.dataServices.ActualizarEmpleado(id, this.empleados[id])
  }
  eliminaEmpleado(id: number) {
    this.empleados.splice(id, 1)
    this.dataServices.eliminarEmpleado(id)
    if (this.empleados != null) {
      this.dataServices.guardarEmpleado(this.empleados)
    }

  }
}
