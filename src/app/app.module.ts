import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CamperTableComponent } from './camper-table.component';


@NgModule({
  declarations: [
    AppComponent,
    CamperTableComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: ':set', // as in 'set of highest alltime/recent points
        component: CamperTableComponent
      },
      {
        path: '',
        redirectTo: '/recent',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
