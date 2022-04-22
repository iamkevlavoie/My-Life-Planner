import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddgoalPageRoutingModule } from './addgoal-routing.module';

import { AddgoalPage } from './addgoal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddgoalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddgoalPage]
})
export class AddgoalPageModule {}
