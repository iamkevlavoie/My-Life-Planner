import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideodiaryPage } from './videodiary.page';

const routes: Routes = [
  {
    path: '',
    component: VideodiaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideodiaryPageRoutingModule {}
