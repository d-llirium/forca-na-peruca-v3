import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComoTabPage } from './como-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ComoTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComoTabPageRoutingModule {}
