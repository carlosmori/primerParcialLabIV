import { Component, Injectable, OnInit } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Actor } from 'src/app/interfaces/actor';
import { Pais } from 'src/app/interfaces/pais';
import { ActorsService } from 'src/app/services/actors.service';
@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.scss'],
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
  constructor(private actorsService: ActorsService, private parserFormatter: NgbDateParserFormatter) {}

  ngOnInit(): void {}
  CargarActor(event) {
    event.preventDefault();
    event.stopPropagation();
    this.nuevoActor.id = 1;
    this.nuevoActor.fecha_nacimiento = this.parserFormatter.format(this.model);
    this.loading = true;
    console.log(this.nuevoActor);
    setTimeout(() => {
      this.loading = false;
      this.actorsService.createActor({ ...this.nuevoActor });
    }, 1500);
  }
  asignarPais(pais: Pais) {
    this.nuevoActor.nacionalidad = pais.name;
  }
}
