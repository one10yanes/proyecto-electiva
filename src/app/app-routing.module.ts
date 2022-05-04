import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pag2Component } from './paginas/pag2/pag2.component';

const routes: Routes = [
  { path: 'pagina2', component: Pag2Component },
  { path: '', component: Pag2Component }

  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
