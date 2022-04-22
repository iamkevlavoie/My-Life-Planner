import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideodiaryPageRoutingModule } from './videodiary-routing.module';

import { VideodiaryPage } from './videodiary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideodiaryPageRoutingModule
  ],
  declarations: [VideodiaryPage]
})
export class VideodiaryPageModule {}
