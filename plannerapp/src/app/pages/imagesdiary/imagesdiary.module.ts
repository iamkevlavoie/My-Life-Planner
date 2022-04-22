import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagesdiaryPageRoutingModule } from './imagesdiary-routing.module';

import { ImagesdiaryPage } from './imagesdiary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagesdiaryPageRoutingModule
  ],
  declarations: [ImagesdiaryPage]
})
export class ImagesdiaryPageModule {}
