import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Actor } from 'src/app/interfaces/actor';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss'],
})
export class CreateMovieComponent implements OnInit {
  nombre: string;
  model: NgbDateStruct;
  newMovie: any = {
    id: null,
    nombre: '',
    tipo: 'Terror',
    fecha_estreno: '',
    cantidad_publico: null,
    borrado: 1,
    actor: {
      id: null,
      foto: '',
      nombre: '',
      apellido: '',
      sexo: '',
      fecha_nacimiento: '',
    },
  };
  movies: any[];
  loading: boolean;
  constructor(
    private router: Router,
    private moviesService: MoviesService,
    private parserFormatter: NgbDateParserFormatter
  ) {}

  ngOnInit(): void {}
  CargarPelicula(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(this.newMovie);
    this.newMovie.id = 17;
    this.newMovie.fecha_estreno = this.parserFormatter.format(this.model);
    this.moviesService.createMovie(this.newMovie);
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }

  selectActor(actor: Actor) {
    this.newMovie.actor = actor;
  }
}
