import { PoliticsComponent } from "./politics/politics.component";
import{Routes} from '@angular/router'
import { ScienceComponent } from "./science/science.component";
import { SportsComponent } from "./sports/sports.component";
import { TechComponent } from "./tech/tech.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AboutComponent } from "./about/about.component";

export const myroutes:Routes=[
    
    {path:'about',component:AboutComponent},
    {path:'welcome',component:WelcomeComponent},
{path:'politics',component:PoliticsComponent},
{path:'science',component:ScienceComponent},
{path:'sports',component:SportsComponent},
{path:'tech',component:TechComponent}
]