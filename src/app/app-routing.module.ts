import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CamperTableComponent } from './camper-table.component';

const routes: Routes = [
  {
    path: ':set', // as in 'set of highest alltime/recent points
    component: CamperTableComponent
  },
  {
    path: '',
    redirectTo: '/recent',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
