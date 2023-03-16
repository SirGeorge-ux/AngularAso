import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';



const routes: Routes = [
  { path: '', redirectTo: 'list-empleados', pathMatch: 'full' }, /*Redireccion de la pag. principal a list-empleados*/
  { path: 'list-empleados', component: ListEmpleadosComponent },
  { path: 'create-empleado', component: CreateEmpleadoComponent },
  /*Cuando pones un ruta erronea te manda a list-empleado por defecto*/
  { path: '**', redirectTo: 'list-empleados', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
