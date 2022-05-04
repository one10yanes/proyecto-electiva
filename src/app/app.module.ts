import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PieComponent } from './componentes/pie/pie.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { Seccion1Component } from './componentes/seccion1/seccion1.component';

import { Seccion3Component } from './componentes/seccion3/seccion3.component';
import { Seccion4Component } from './componentes/seccion4/seccion4.component';
import { Pag2Component } from './paginas/pag2/pag2.component';
import { Pag3Component } from './paginas/pag3/pag3.component';
import { Pag4Component } from './paginas/pag4/pag4.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PieComponent,
    MenuComponent,
    Seccion1Component,
    
    Seccion3Component,
    Seccion4Component,
    Pag2Component,
    Pag3Component,
    Pag4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
