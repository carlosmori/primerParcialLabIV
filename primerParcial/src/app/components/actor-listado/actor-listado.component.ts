import { Component, OnInit } from '@angular/core';
import { ActorsService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss'],
})
export class ActorListadoComponent implements OnInit {
  actors: any;
  selectedRow: any;
  selectedActor: any;

  constructor(private actorService: ActorsService) {}

  ngOnInit(): void {}
  selectActor(actor: any) {
    console.log('entre');
    this.selectedActor = actor;
  }
}
