import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-empleado',
  templateUrl: './create-empleado.component.html',
  styleUrls: ['./create-empleado.component.css']
})
export class CreateEmpleadoComponent implements OnInit {

  createEmpleado: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { 
    this.createEmpleado = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      documento: ['', Validators.required],
      salario: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarEmpleado(){
    this.submitted = true;

    if(this.createEmpleado.invalid){
      return;
    }
    const empleado: any = {
      nombre : this.createEmpleado.value.nombre,
      apellido : this.createEmpleado.value.apellido,
      documento : this.createEmpleado.value.documento,
      salario : this.createEmpleado.value.salario,
      fechaCreacion: new Date(),
      fechaActualizado: new Date()
  }
    console.log(empleado);
  }

}
