import { Component, OnInit } from '@angular/core';
import {Hero}from '../heroInterface/hero';
import {HeroService} from '../hero.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private HeroServ: HeroService) { }
  hero: Hero[] = [];

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void{
    this.HeroServ.getHeroes().subscribe(hero =>this.hero = hero.slice(1,5));

  }

}
