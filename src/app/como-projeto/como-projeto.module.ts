import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComoProjetoPageRoutingModule } from './como-projeto-routing.module';

import { ComoProjetoPage } from './como-projeto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComoProjetoPageRoutingModule
  ],
  declarations: [ComoProjetoPage]
})
export class ComoProjetoPageModule {}
