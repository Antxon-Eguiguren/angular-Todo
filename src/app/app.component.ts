import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrTareas: any[];

  constructor() {
    this.arrTareas = [];
  }

  manejarTareaEnviada($event) {
    // FORMA LARGA Y FÁCIL DE ENTENDER CON LO QUE SABEMOS
    // const nuevaTarea = {
    //   titulo: $event.titulo,
    //   texto: $event.texto,
    // };
    // this.arrTareas.push(nuevaTarea);

    // FORMA DE HACERLO CON SPREAD OPERATOR (para que no apunte todo el tiempo al mismo objeto y se quede con el último valor todo el rato)
    const nuevaTarea = { ...$event };
    this.arrTareas.push(nuevaTarea);
  }

}
