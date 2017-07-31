import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FeaturesComponent,
    FeatureCardComponent
  ],
  exports: [
    FeatureCardComponent
  ]
})
export class FeatureModule { }
