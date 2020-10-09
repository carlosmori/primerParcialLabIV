import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActorsService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-borrar-actor',
  templateUrl: './borrar-actor.component.html',
  styleUrls: ['./borrar-actor.component.scss'],
})
export class BorrarActorComponent implements OnInit {
  @Input()
  actor: any;

  constructor(private actorService: ActorsService) {}

  ngOnInit(): void {}
  logicDelete() {
    this.actorService.logicDelete({ actorDocumentId: this.actor.actorDocumentId, borrado: 0 });
  }
}
