import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddgoalPage } from './addgoal.page';

const routes: Routes = [
  {
    path: '',
    component: AddgoalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddgoalPageRoutingModule {}
