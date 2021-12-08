import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroRegistrarPage } from './cadastro-registrar.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroRegistrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroRegistrarPageRoutingModule {}
