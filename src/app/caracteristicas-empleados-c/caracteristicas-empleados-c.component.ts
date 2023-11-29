import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleados-c',
  templateUrl: './caracteristicas-empleados-c.component.html',
  styleUrls: ['./caracteristicas-empleados-c.component.css']
})
export class CaracteristicasEmpleadosCComponent {
  @Output() caracteristicasEmpleados = new EventEmitter<string>()
  addNewItem(value: string){
    this.caracteristicasEmpleados.emit(value
      )
  }
}
