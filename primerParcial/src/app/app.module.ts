import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { AltaActorComponent } from './components/alta-actor/alta-actor.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ErrorComponent } from './components/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModificarActorComponent } from './components/modificar-actor/modificar-actor.component';
import { DetalleActorComponent } from './components/detalle-actor/detalle-actor.component';
import { BorrarActorComponent } from './components/borrar-actor/borrar-actor.component';
import { TablaActorComponent } from './components/tabla-actor/tabla-actor.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaPaisesComponent,
    AltaActorComponent,
    BienvenidoComponent,
    ErrorComponent,
    ActorListadoComponent,
    ModificarActorComponent,
    DetalleActorComponent,
    BorrarActorComponent,
    TablaActorComponent,
    CreateMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
