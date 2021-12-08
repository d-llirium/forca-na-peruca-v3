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
        path: 'cadastro-registrar/',
        loadChildren: () => import('../cadastro-registrar/cadastro-registrar.module').then( m => m.CadastroRegistrarPageModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroPageRoutingModule {}
