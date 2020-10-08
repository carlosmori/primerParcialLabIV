import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import { map } from 'rxjs/operators';
import { Pais } from 'src/app/interfaces/pais';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss'],
})
export class TablaPaisesComponent implements OnInit {
  paises: Pais[];
  @Output()
  seleccionarPais = new EventEmitter<Pais>();
  selectedRow: string;
  constructor(private paisesService: PaisesService) {}

  ngOnInit(): void {
    this.paisesService.listCountries$.subscribe((paises) => {
      console.log(paises);
      this.paises = paises.slice(0, 5);
    });
  }
  selecPais(pais: Pais) {
    this.seleccionarPais.emit(pais);
    this.selectedRow = pais.name;
  }
}
