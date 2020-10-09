import { Component, Input, OnInit } from '@angular/core';
import { ActorsService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-modificar-actor',
  templateUrl: './modificar-actor.component.html',
  styleUrls: ['./modificar-actor.component.scss'],
})
export class ModificarActorComponent implements OnInit {
  @Input()
  actor: any;
  nuevoActor: any = {
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    sexo: '',
    nacionalidad: '',
  };
  loading: boolean;
  constructor(private actorService: ActorsService) {}

  ngOnInit(): void {}
  ActualizarActor() {
    event.preventDefault();
    event.stopPropagation();
    console.log(this.actor);
    console.log(this.nuevoActor);
    this.actorService.updateActor({ actorDocumentId: this.actor.actorDocumentId, nuevoActor: this.nuevoActor });

    // this.loading = true;
    // setTimeout(() => {
    //   this.loading = false;
    // }, 500);
  }
}
