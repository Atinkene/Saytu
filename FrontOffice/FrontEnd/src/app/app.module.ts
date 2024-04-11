import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { EmploiDuTempsComponent } from './emploi-du-temps/emploi-du-temps.component';
import { AvisFormComponent } from './avis-form/avis-form.component';
import { PvFormComponent } from './pv-form/pv-form.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// import { UpplanningComponent } from './upplanning/upplanning.component';
import { UpplanningFormComponent } from './upplanning-form/upplanning-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AvisComponent } from './avis/avis.component';
import { PvComponent } from './pv/pv.component';
import { RapportFormComponent } from './rapport-form/rapport-form.component';
import { RapportComponent } from './rapport/rapport.component';
import { RespClassComponent } from './resp-class/resp-class.component';
import { RespPedagogiqueComponent } from './resp-pedagogique/resp-pedagogique.component';
import { CoordPedagogiqueComponent } from './coord-pedagogique/coord-pedagogique.component';
import { EquipePedagogiqueComponent } from './equipe-pedagogique/equipe-pedagogique.component';
import { ChefDepartementComponent } from './chef-departement/chef-departement.component';
import { DirEtudeComponent } from './dir-etude/dir-etude.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    EmploiDuTempsComponent,
    AvisFormComponent,
    PvFormComponent,
    // UpplanningComponent,
    UpplanningFormComponent,
    AvisComponent,
    PvComponent,
    RapportFormComponent,
    RapportComponent,
    RespClassComponent,
    RespPedagogiqueComponent,
    CoordPedagogiqueComponent,
    EquipePedagogiqueComponent,
    ChefDepartementComponent,
    DirEtudeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
