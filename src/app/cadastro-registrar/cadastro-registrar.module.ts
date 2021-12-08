import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroRegistrarPageRoutingModule } from './cadastro-registrar-routing.module';

import { CadastroRegistrarPage } from './cadastro-registrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroRegistrarPageRoutingModule
  ],
  declarations: [CadastroRegistrarPage]
})
export class CadastroRegistrarPageModule {}
