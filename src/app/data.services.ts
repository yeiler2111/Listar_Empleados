import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { empleados } from "./empleado.models";
@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) { }

  guardarEmpleado(empleados: empleados[]) {
    this.httpClient.put('https://mis-clientes-cf52c-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(Response=>console.log("se ha guardado los empleados: " + Response), error=> console.log('error'+error));

 }
 cargarEmpleados(){
  return this.httpClient.get('https://mis-clientes-cf52c-default-rtdb.firebaseio.com/datos.json')
 }

 ActualizarEmpleado(indice:number, empleado:empleados){
    let url='https://mis-clientes-cf52c-default-rtdb.firebaseio.com/datos/'+indice+'.json'
    this.httpClient.put(url, empleado).subscribe(Response=>console.log("se ha modificado correctamente el empleado: " + Response), error=> console.log('error'+error));

 }
 eliminarEmpleado(indice:number){
    let url='https://mis-clientes-cf52c-default-rtdb.firebaseio.com/datos/'+indice+'.json'
    this.httpClient.delete(url).subscribe(Response=>console.log("se ha eliminado correctamente el empleado: " + Response), error=> console.log('error'+error));

 }


}
