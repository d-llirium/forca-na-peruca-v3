import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComoTabPageRoutingModule } from './como-tab-routing.module';

import { ComoTabPage } from './como-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComoTabPageRoutingModule
  ],
  declarations: [ComoTabPage]
})
export class ComoTabPageModule {}
