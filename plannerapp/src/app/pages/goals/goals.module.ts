import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalsPageRoutingModule } from './goals-routing.module';

import { GoalsPage } from './goals.page';
import { GoalComponent } from 'src/app/components/goal/goal.component';
import { TabsPageModule } from 'src/app/tabs/tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoalsPageRoutingModule,
    
  ],
  declarations: [GoalsPage,GoalComponent]
})
export class GoalsPageModule {}
