import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchievementsPageRoutingModule } from './achievements-routing.module';

import { AchievementsPage } from './achievements.page';
import { GoalComponent } from 'src/app/components/goal/goal.component';
import { GoalsPage } from '../goals/goals.page';
import { AchievementgoalsComponent } from 'src/app/components/achievementgoals/achievementgoals.component';
import { AchievementtasksComponent } from 'src/app/components/achievementtasks/achievementtasks.component';
import { TaskComponent } from 'src/app/components/task/task.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchievementsPageRoutingModule
  ],
  declarations: [AchievementsPage,AchievementgoalsComponent,AchievementtasksComponent]
})
export class AchievementsPageModule {}
