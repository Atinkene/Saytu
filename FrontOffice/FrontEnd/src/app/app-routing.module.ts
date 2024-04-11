import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EmploiDuTempsComponent } from './emploi-du-temps/emploi-du-temps.component';
import { AvisFormComponent } from './avis-form/avis-form.component';
import { UpplanningFormComponent } from './upplanning-form/upplanning-form.component';
import { AvisComponent } from './avis/avis.component';
import { PvFormComponent } from './pv-form/pv-form.component';
import { PvComponent } from './pv/pv.component';
import { RapportFormComponent } from './rapport-form/rapport-form.component';
import { RapportComponent } from './rapport/rapport.component';
import { RespClassComponent } from './resp-class/resp-class.component';
import { RespPedagogiqueComponent } from './resp-pedagogique/resp-pedagogique.component';
import { CoordPedagogiqueComponent } from './coord-pedagogique/coord-pedagogique.component';
import { EquipePedagogiqueComponent } from './equipe-pedagogique/equipe-pedagogique.component';
import { ChefDepartementComponent } from './chef-departement/chef-departement.component';
import { DirEtudeComponent } from './dir-etude/dir-etude.component';

const routes: Routes = [
  { path: '', component: AuthComponent }, // Route par défaut vers AuthComponent
  { path: 'login', component: AuthComponent },
  { path: 'emploi-du-temps', component: EmploiDuTempsComponent },
  { path: 'avis', component: AvisFormComponent },
  { path: 'upplanning', component: UpplanningFormComponent },
  { path: 'avis-read', component: AvisComponent },
  { path: 'pv-form', component: PvFormComponent },
  { path: 'pv', component: PvComponent },
  { path: 'rapport-form', component: RapportFormComponent },
  { path: 'rapport', component: RapportComponent },
  { path: 'resp_class', component: RespClassComponent },
  { path: 'resp_pedagogique', component: RespPedagogiqueComponent },
  { path: 'coord_pedagogique', component: CoordPedagogiqueComponent },
  { path: 'equipe_pedagogique', component: EquipePedagogiqueComponent },
  { path: 'chef-departement', component: ChefDepartementComponent },
  { path: 'dir-etude', component: DirEtudeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
