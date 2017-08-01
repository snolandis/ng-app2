import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { FeatureRoutingModule } from './features-routing';
import { FeatureDetailsComponent } from './feature-details/feature-details.component';
import { FeaturesService } from './features.service';
import { FeatureFormComponent } from './feature-form/feature-form.component';


@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
  providers: [
    FeaturesService
  ],
  declarations: [
    FeaturesComponent,
    FeatureDetailsComponent,
    FeatureFormComponent,
    FeatureCardComponent
  ],
  exports: [
    FeatureCardComponent
  ]
})
export class FeatureModule { }
