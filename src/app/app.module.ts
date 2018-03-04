import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PoliticsComponent } from './politics/politics.component';
import { ScienceComponent } from './science/science.component';
import { TechComponent } from './tech/tech.component';
import { SportsComponent } from './sports/sports.component';
import { RouterModule } from '@angular/router';
import { myroutes } from './myroutes';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PoliticsComponent,
    ScienceComponent,
    TechComponent,
    SportsComponent,
    WelcomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(myroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
