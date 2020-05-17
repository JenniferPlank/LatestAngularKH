import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicFormComponent } from "./basic-form/basic-form.component";
import { ReactiveDynamicFormComponent } from './reactive-dynamic-form/reactive-dynamic-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StarterReactiveFormComponent } from './starter-reactive-form/starter-reactive-form.component';
import { StarterTemplateFormComponent } from './starter-template-form/starter-template-form.component';
import { TemplateFormComponent } from './template-form/template-form.component'
import { UpdateOnComponent } from './updateOn/updateOn.component';
import { ControlValueAccessorComponent } from './control-value-accessor/control-value-accessor.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/startertemplateform' },
  { path: 'startertemplateform', component: StarterTemplateFormComponent    },
  { path: 'starterreactiveform', component: StarterReactiveFormComponent },
  { path: 'basicform',  component: BasicFormComponent },
  { path: 'templateform',  component: TemplateFormComponent },
  { path: 'reactiveform',     component: ReactiveFormComponent  },
  { path: 'updateon', component: UpdateOnComponent },
  { path: 'controlvalueaccessor', component: ControlValueAccessorComponent },
  { path: 'reactivedynamicform', component: ReactiveDynamicFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [
    StarterTemplateFormComponent, StarterReactiveFormComponent,
    BasicFormComponent, TemplateFormComponent, ReactiveFormComponent,
    ControlValueAccessorComponent, UpdateOnComponent, ReactiveDynamicFormComponent
  ];
}
