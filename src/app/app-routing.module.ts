import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { DashboardComponent} from './dashboard/dashboard.component'

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'questionnaire/questionnaire.component', component: QuestionnaireComponent},
  { path: 'dashboard/dashboard.component', component: DashboardComponent},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
