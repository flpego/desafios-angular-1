import { Component } from '@angular/core';


export class Lista {
  end:boolean;
  taskName: string;
  constructor(taskname:string){
    this.end = false;
    this.taskName = taskname;
  }

  endTask() {
    return this.end = !this.end;
  }
}

@Component({
  selector: 'app-apuntes',
  templateUrl: './apuntes.component.html',
  styleUrl: './apuntes.component.css',
})
export class apuntes {
    title:string = "4: Interpolación y Directivas";

    
    listArr:Lista[] = [];


    createList() {
      for (let i  = 0; i < 5; i++) {
        
        this.listArr.push(new Lista(`Item numero ${i}`))
      }
      return this.listArr;
    }

    deleteList() {
      return this.listArr = [];
    }
    
    hasError =true;
    colorDefault = "black";
    colorRed = true;
    colorGreen = "green"

    changeColor() {
     
     return   this.colorRed = !this.colorRed;
  }

    changeValue() {
     
       return  this.hasError = !this.hasError;
    }
}

