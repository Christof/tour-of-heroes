import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  // must be set so that templateUrl and style URLs are relative to the component
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls:[ 'heroes.component.css' ],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  heroes: Hero[];
}

