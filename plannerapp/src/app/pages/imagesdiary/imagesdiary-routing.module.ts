import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagesdiaryPage } from './imagesdiary.page';

const routes: Routes = [
  {
    path: '',
    component: ImagesdiaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagesdiaryPageRoutingModule {}
