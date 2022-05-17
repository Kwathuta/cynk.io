import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';

import { NgMatModule } from '../ng-mat/ng-mat.module';
import { HeroComponent } from './hero/hero.component';


@NgModule({
  declarations: [
    LandingComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    NgMatModule
  ]
})
export class LandingModule { }
