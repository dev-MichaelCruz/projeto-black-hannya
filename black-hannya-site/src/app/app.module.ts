import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarrosselComponent } from './components/carrossel-du/carrossel.component';
import { InfosComponent } from './components/infos/infos.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    ApresentacaoComponent,
    CardsComponent,
    CarrosselComponent,
    InfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
