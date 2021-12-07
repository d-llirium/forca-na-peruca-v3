import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
// -- nesse caso a página mãe é a home
// -- src/app/home/home-routing.module.ts
const routes: Routes = [
  {
    path: '', // -- para referenciar a própria página mãe que é a home
    component: HomePage,
    children: 
    [ // -- adicione as filhas que entram na TAB
      {
        path: 'como-tab',
        loadChildren: () => import('../como-tab/como-tab.module').then( m => m.ComoTabPageModule)
      },
      {
        path: 'sobre',
        loadChildren: () => import('../sobre/sobre.module').then( m => m.SobrePageModule)
      },
      {
        path: 'como-projeto',
        loadChildren: () => import('../como-projeto/como-projeto.module').then( m => m.ComoProjetoPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
