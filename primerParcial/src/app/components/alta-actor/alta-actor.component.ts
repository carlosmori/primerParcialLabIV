import { Component, Injectable, OnInit } from '@angular/core';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Actor } from 'src/app/interfaces/actor';
import { Pais } from 'src/app/interfaces/pais';
import { ActorsService } from 'src/app/services/actors.service';
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {
  readonly DELIMITER = '-';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      const date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10),
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }
}
@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.scss'],
  providers: [{ provide: NgbDateAdapter, useClass: CustomAdapter }],
})
export class AltaActorComponent implements OnInit {
  model: NgbDateStruct;
  date: { year: number; month: number };

  nuevoActor: Actor = {
    id: null,
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    sexo: '',
    nacionalidad: '',
    borrado: 1,
  };
  loading: boolean;
  constructor(private actorsService: ActorsService, private dateAdapter: NgbDateAdapter<string>) {}

  ngOnInit(): void {}
  CargarActor(event) {
    event.preventDefault();
    event.stopPropagation();
    this.nuevoActor.id = 1;
    console.log(this.model);
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      console.log(this.nuevoActor);
      this.actorsService.createActor({ ...this.nuevoActor });
      // this.router.navigate(['/busqueda']);
    }, 1500);
  }
  asignarPais(pais: Pais) {
    this.nuevoActor.nacionalidad = pais.name;
  }
}
