import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroPage } from './cadastro.page';
// -- cadastro-routing.module.ts
const routes: Routes = [
  {
    path: '',
    component: CadastroPage,
    children: 
    [ // -- adicione as filhas que entram na TAB
      {
        path: 'cadastro-editar/',
        loadChildren: () => import('../cadastro-editar/cadastro-editar.module').then( m => m.CadastroEditarPageModule)
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroPageRoutingModule {}
