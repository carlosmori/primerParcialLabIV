import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/interfaces/actor';
import { Pais } from 'src/app/interfaces/pais';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.scss'],
})
export class AltaActorComponent implements OnInit {
  nuevoActor: Actor = {
    id: null,
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    sexo: '',
    nacionalidad: '',
  };
  loading: boolean;
  constructor() {}

  ngOnInit(): void {}
  CargarActor(event) {
    event.preventDefault();
    event.stopPropagation();
    this.nuevoActor.id = 1;

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      console.log(this.nuevoActor);
      // this.router.navigate(['/busqueda']);
    }, 1500);
  }
  asignarPais(pais: Pais) {
    this.nuevoActor.nacionalidad = pais.name;
  }
}
