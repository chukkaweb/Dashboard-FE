import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule, Routes } from '@angular/router';

const LANDING_ROUTES: Routes = [
  {
    path: '',
    component: LandingPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    LandingPageComponent,
    RouterModule.forChild(LANDING_ROUTES)
  ]
})
export class LandingPageModule { }
