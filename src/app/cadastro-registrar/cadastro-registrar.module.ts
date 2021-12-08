import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// -- para criar o formulário
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroRegistrarPageRoutingModule } from './cadastro-registrar-routing.module';

import { CadastroRegistrarPage } from './cadastro-registrar.page';

@NgModule({
  imports: [
    CommonModule,
    // --
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CadastroRegistrarPageRoutingModule
  ],
  declarations: [CadastroRegistrarPage]
})
export class CadastroRegistrarPageModule {}
