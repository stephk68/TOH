import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import {HeroPowerComponent} from './hero-power/hero-power.component';


const routes: Routes = [
  { path: '', redirectTo:'/dashboard' , pathMatch:'full' },
  {path: 'hero', component: HeroComponent},
  { path: 'dashboard', component: DashboardComponent },
  {path:'detail/:id',component: HeroPowerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
