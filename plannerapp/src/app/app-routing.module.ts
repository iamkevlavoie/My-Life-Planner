import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'goals',
    loadChildren: () => import('./pages/goals/goals.module').then( m => m.GoalsPageModule)
  },
  {
    path: 'addgoal',
    loadChildren: () => import('./pages/addgoal/addgoal.module').then( m => m.AddgoalPageModule)
  },
  {
    path: 'achievements',
    loadChildren: () => import('./pages/achievements/achievements.module').then( m => m.AchievementsPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./pages/notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'addnote',
    loadChildren: () => import('./pages/addnote/addnote.module').then( m => m.AddnotePageModule)
  },
  {
    path: 'videodiary',
    loadChildren: () => import('./pages/videodiary/videodiary.module').then( m => m.VideodiaryPageModule)
  },
  {
    path: 'imagesdiary',
    loadChildren: () => import('./pages/imagesdiary/imagesdiary.module').then( m => m.ImagesdiaryPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
