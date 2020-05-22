/*import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './test/test.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StarterReactiveFormComponent } from './starter-reactive-form/starter-reactive-form.component';
import { UpdateOnComponent } from './updateOn/updateOn.component';
import { ControlValueAccessorComponent } from './control-value-accessor/control-value-accessor.component';
import { ReactiveDynamicFormComponent } from './reactive-dynamic-form/reactive-dynamic-form.component';

const routes: Routes = [
  { path: 'AppComponent', pathMatch:'full', redirectTo: '/AppComponent' },
  { path: 'test', component: TestComponent },
  { path: 'starterreactiveform', component: StarterReactiveFormComponent },
  { path: 'basicform',  component: BasicFormComponent },
  { path: 'templateform',  component: TemplateFormComponent },
  { path: 'reactiveform',     component: ReactiveFormComponent  },
  { path: 'updateon', component: UpdateOnComponent },
  { path: 'controlvalueaccessor', component: ControlValueAccessorComponent },
  { path: 'reactivedynamicform', component: ReactiveDynamicFormComponent }
  */

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal, FilterState, Filter, Option } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  animals;
  filterState: FilterState;
  filters: Observable<Filter[]>;

  constructor(animalService: animals) {
    this.animals = animalService.animals;
    this.filterState = animalService.filterState;
    this.filters = animalService.filters;
  }

  changeFilter(category: string, option: Option) {
    this.filterState[category] = option;
  }
}


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

  {path: 'app', component: AppComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



