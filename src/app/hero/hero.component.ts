import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroInterface/hero';
import {HeroService} from '../hero.service';
import {MessagesService} from '../messages.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
 
  hero: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
   // this.heroService.getUser().subscribe(this.Frese);
    this.getHero();
  }
  getHero(): void{
       this.heroService.getHeroes().subscribe(hero =>this.hero = hero);
  }

  
}
