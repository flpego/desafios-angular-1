import { Component } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css',
})
export class StudentsListComponent {
  subject = 'Quimica';
  studentList: StudentModel[] = [
    new StudentModel('Walter White', 50, 0, 10),
    new StudentModel('Jesse Pinkman', 30, 5, 8),
    new StudentModel('Mike Ehrmantraut', 60, 2, 5),
    new StudentModel('Gustavo Fring', 50, 3, 6),
    new StudentModel('Hank Schrader', 45, 1, 7),
    new StudentModel('Skyler White', 45, 0, 8),
    new StudentModel('Hector Salamanca', 75, 1, 3),
    new StudentModel('Tuco Salamanca', 35, 4, 4),
    new StudentModel('Saul Goodman', 55, 2, 4),
    new StudentModel('Todd Alquist', 25, 6, 4.5),
  ];

  constructor() {
    console.log(this.studentList);
  }
  aprobadosQuantity() {
    let arrAprobados = this.studentList.filter(
      (student) => student.aprobado === true
    );
    return arrAprobados;
  }
  desaprobadosQuantity() {
    let arrDesaprobados = this.studentList.filter(
      (student) => student.aprobado === false
    );
    return arrDesaprobados;
  }

  mostrarApr = false;
  mostrarDesapr = false;
  mostrarAprobados() {
    return (this.mostrarApr = !this.mostrarApr);
  }

  mostrarDesaprobados() {
    return (this.mostrarDesapr = !this.mostrarDesapr);
  }

  alerta(){
    alert("No tienes permisos para Editar...")
  }
}

//clase para instanciar estudiantes
class StudentModel {
  id: string;
  fullName: string;
  age: number;
  faltas: number;
  calificacion: number;
  aprobado: boolean;
  constructor(
    fullName: string,
    age: number,
    faltas: number,
    calificacion: number
  ) {
    this.id = this.createId();
    this.fullName = fullName;
    this.age = age;
    this.faltas = faltas;
    this.calificacion = calificacion;
    this.aprobado = this.calculateAprobado();
  }

  createId() {
    const number1 = Date.now().toString(30);
    const number2 = Math.random().toString(29).slice(2);
    return (this.id = number1 + number2);
  }

  calculateAprobado() {
    if (this.calificacion >= 6.6) {
      return (this.aprobado = true);
    } else {
      return (this.aprobado = false);
    }
  }
}
