import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { FeatureDetailsComponent } from './feature-details/feature-details.component';

const routes: Routes = [
  { path: 'features', component: FeaturesComponent },
  { path: 'feature/:slug', component: FeatureDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class FeatureRoutingModule {
}
