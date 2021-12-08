import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroEditarPage } from './cadastro-editar.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroEditarPageRoutingModule {}
