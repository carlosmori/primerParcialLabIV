import { Component, Input, OnInit } from '@angular/core';
import { ActorsService } from 'src/app/services/actors.service';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

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
  model: NgbDateStruct;
  constructor(private actorService: ActorsService, private parserFormatter: NgbDateParserFormatter) {}

  ngOnInit(): void {}
  ActualizarActor() {
    event.preventDefault();
    event.stopPropagation();
    this.nuevoActor.fecha_nacimiento = this.parserFormatter.format(this.model);
    this.actorService.updateActor({ actorDocumentId: this.actor.actorDocumentId, nuevoActor: this.nuevoActor });
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
}
