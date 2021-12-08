import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEditarPageRoutingModule } from './cadastro-editar-routing.module';

import { CadastroEditarPage } from './cadastro-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroEditarPageRoutingModule
  ],
  declarations: [CadastroEditarPage]
})
export class CadastroEditarPageModule {}
