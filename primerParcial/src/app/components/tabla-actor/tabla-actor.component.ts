import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActorsService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss'],
})
export class TablaActorComponent implements OnInit {
  @Output()
  selectActor = new EventEmitter<any>();
  actors;
  selectedRow: number;
  constructor(private actorService: ActorsService) {}

  ngOnInit(): void {
    this.actorService.getActors().subscribe((actors) => {
      this.actors = actors.filter((act) => act.borrado === 1);
    });
  }
  selActor(actor: any) {
    this.selectActor.emit(actor);
    this.selectedRow = actor.id;
  }
}
