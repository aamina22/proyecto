import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegistroAnteProyectoComponent } from './registro-ante-proyecto/registro-ante-proyecto.component';
import { VisualizacionItemComponent } from './visualizacion-item/visualizacion-item.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { PlanteamientoPComponent } from './planteamiento-p/planteamiento-p.component';
import { HipotesisComponent } from './hipotesis/hipotesis.component';
import { ObjetivoGComponent } from './objetivo-g/objetivo-g.component';
import { TituloTComponent } from './titulo-t/titulo-t.component';
import { JustificacionComponent } from './justificacion/justificacion.component';
import { SugerenciaComponent } from './sugerencia/sugerencia.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegistroAnteProyectoComponent,
    VisualizacionItemComponent,
    DescripcionComponent,
    PlanteamientoPComponent,
    HipotesisComponent,
    ObjetivoGComponent,
    TituloTComponent,
    JustificacionComponent,
    SugerenciaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
