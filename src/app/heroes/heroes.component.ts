import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero.models';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  constructor() { }

  ngOnInit(): void {
  }

}