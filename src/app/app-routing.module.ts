import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'como-tab',
    loadChildren: () => import('./como-tab/como-tab.module').then( m => m.ComoTabPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'como-projeto',
    loadChildren: () => import('./como-projeto/como-projeto.module').then( m => m.ComoProjetoPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'cadastro-registrar',
    loadChildren: () => import('./cadastro-registrar/cadastro-registrar.module').then( m => m.CadastroRegistrarPageModule)
  },
  {
    path: 'cadastro-editar/:id', // -- adiciona esse /:id
    loadChildren: () => import('./cadastro-editar/cadastro-editar.module').then( m => m.CadastroEditarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
