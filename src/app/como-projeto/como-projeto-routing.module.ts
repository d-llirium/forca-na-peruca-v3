import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComoProjetoPage } from './como-projeto.page';

const routes: Routes = [
  {
    path: '',
    component: ComoProjetoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComoProjetoPageRoutingModule {}
