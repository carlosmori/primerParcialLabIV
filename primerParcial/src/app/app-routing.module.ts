import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { AltaActorComponent } from './components/alta-actor/alta-actor.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { ErrorComponent } from './components/error/error.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';

const routes: Routes = [
  { path: '', component: AltaActorComponent },
  { path: 'actor/listado', component: ActorListadoComponent },
  { path: 'peliculas/alta', component: CreateMovieComponent },
  // { path: 'actor/alta', component: CreateActorComponent },
  // { path: 'peliculas/listado', component: MoviesListComponent },
  { path: '**', component: ErrorComponent },
  { path: 'error', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
