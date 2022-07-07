import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './models/hero.models';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

constructor(private MessageService: MessageService) { }

getHeroes(): Observable<Hero[]>{
  const heroes = of(HEROES);
  this.MessageService.add('HeroService: fetched heores')
  return heroes
}

}
