import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescripcionComponent } from './modules/home/descripcion/descripcion.component';
import { HipotesisComponent } from './modules/home/hipotesis/hipotesis.component';
import { JustificacionComponent } from './modules/home/justificacion/justificacion.component';
import { LoginComponent } from './modules/home/login/login.component';
import { ObjetivoGComponent } from './modules/home/objetivo-g/objetivo-g.component';
import { PlanteamientoPComponent } from './modules/home/planteamiento-p/planteamiento-p.component';
import { RegistroAnteProyectoComponent } from './modules/home/registro-ante-proyecto/registro-ante-proyecto.component';
import { SugerenciaComponent } from './modules/home/sugerencia/sugerencia.component';
import { TituloTComponent } from './modules/home/titulo-t/titulo-t.component';
import { VisualizacionItemComponent } from './modules/home/visualizacion-item/visualizacion-item.component';

const routes: Routes = [
  {path: '', loadChildren: () =>import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: 'home', component:LoginComponent},
  {path: 'anteproyecto',component:RegistroAnteProyectoComponent},
  {path: 'Lista',component:VisualizacionItemComponent},
  {path: 'Descripcion',component:DescripcionComponent},
  {path: 'plaeamientop',component:PlanteamientoPComponent},
  {path: 'Hipotesis',component:HipotesisComponent},
  {path: 'ObjetivoG',component:ObjetivoGComponent},
  {path: 'TituloT',component:TituloTComponent},
  {path: 'Justificacion',component:JustificacionComponent},
  {path: 'Sugerencia',component:SugerenciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
