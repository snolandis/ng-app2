import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { FeatureCardComponent } from './features/feature-card/feature-card.component';
import { FeatureDetailsComponent } from './features/feature-details/feature-details.component';
import { HttpModule } from '@angular/http';
import { FeatureModule } from './features/features.module';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    // FeaturesComponent,
    // FeatureCardComponent,
    // FeatureDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FeatureModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
