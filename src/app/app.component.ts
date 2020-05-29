import { Component } from '@angular/core';
import { AnimalService } from './animal.service';
import { Observable } from 'rxjs';
import { Animal, FilterState, Filter } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animals: Observable<Animal[]> ;
  filterState: FilterState;
  filters: Observable<Filter[]>;

  constructor(animalService: AnimalService) {
    this.animals = animalService.animals;
    this.filterState = animalService.filterState;
    this.filters = animalService.filters;
  }

}


