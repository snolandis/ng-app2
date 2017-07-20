import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { FeatureDetailsComponent } from './feature-details/feature-details.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'feature-card', component: FeatureCardComponent },
  { path: 'feature-details', component: FeatureDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturesComponent,
    FeatureCardComponent,
    FeatureDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
