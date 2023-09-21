import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { Nosotros1Component } from './pages/nosotros/nosotros1/nosotros1.component';
import { Nosotros2Component } from './pages/nosotros/nosotros2/nosotros2.component';
import { InicioAComponent } from './pages/inicio/inicio-a/inicio-a.component';
import { InicioBComponent } from './pages/inicio/inicio-a/inicio-b/inicio-b.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    Nosotros1Component,
    Nosotros2Component,
    InicioAComponent,
    InicioBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
