import { Injectable } from '@angular/core';
import { Hero } from './heroInterface/hero';
import {HEROES} from './alter-hero';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {MessagesService} from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes() : Observable<Hero[]>{
   return of(HEROES);
  }
  /*getUser(){
    return this.http.get('http://localhost:3000/data');
  }*/
  getHero(id: number): Observable<Hero>{
    this.MsgServ.add(`Vous avez choisi=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  
  constructor(private MsgServ: MessagesService, private http: HttpClient) { }
}
