import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../heroInterface/hero';
import { ActivatedRoute } from '@angular/router';
import {HeroService} from '../hero.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-hero-power',
  templateUrl: './hero-power.component.html',
  styleUrls: ['./hero-power.component.scss']
})
export class HeroPowerComponent implements OnInit {
   hero: Hero;

  constructor(private route: ActivatedRoute, private HeroServ: HeroService, private location: Location) { }

  ngOnInit(): void {
    this.getHero();
    console.log("here", this.hero);
  }
 getHero(): void{

   const id = +this.route.snapshot.paramMap.get('id');
   this.HeroServ.getHero(id).subscribe( hero => {
     console.log('hererererffe');
    this.hero = hero
   })
 }
 goBack(){
   this.location.back();
 }
}
