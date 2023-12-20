import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoComponent } from './components/logo/logo.component';
import { CarroselDuComponent } from './components/carrosel-du/carrosel-du.component';
import { CarroselJackComponent } from './components/carrosel-jack/carrosel-jack.component';
import { CarroselCaxaComponent } from './components/carrosel-caxa/carrosel-caxa.component';
import { CarroselRoComponent } from './components/carrosel-ro/carrosel-ro.component';

const routes: Routes = [
  { path: '', component: LogoComponent, children: [
    { path: 'edu', component: CarroselDuComponent },
    { path: 'jack', component: CarroselJackComponent },
    { path: 'caxa', component: CarroselCaxaComponent },
    { path: 'rogerio', component: CarroselRoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
