import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';
import { InfosComponent } from './components/infos/infos.component';
import { CarroselDuComponent } from './components/carrosel-du/carrosel-du.component';
import { CarroselJackComponent } from './components/carrosel-jack/carrosel-jack.component';
import { CarroselCaxaComponent } from './components/carrosel-caxa/carrosel-caxa.component';
import { CarroselRoComponent } from './components/carrosel-ro/carrosel-ro.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    ApresentacaoComponent,
    CardsComponent,
    CarrosselComponent,
    InfosComponent,
    CarroselDuComponent,
    CarroselJackComponent,
    CarroselCaxaComponent,
    CarroselRoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
