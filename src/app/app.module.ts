import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatSelectModule,  } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module'





import { RequiredTextboxComponent } from './controlValueAccessor/required-textbox.component';
import { PhoneTextboxComponent } from './controlValueAccessor/phone-textbox.component';
import { CamelToTitlePipe } from './shared/camel-to-title.pipe';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ControlValueAccessorComponent } from './control-value-accessor/control-value-accessor.component';
import { PhoneTextbookComponent } from './phone-textbook/phone-textbook.component';
import { RequiredTextbookComponent } from './required-textbook/required-textbook.component';
import { ReactiveDynamicFormComponent } from './reactive-dynamic-form/reactive-dynamic-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StarterReactiveFormComponent } from './starter-reactive-form/starter-reactive-form.component';
import { StarterTemplateFormComponent } from './starter-template-form/starter-template-form.component';
import { UpdateOnComponent } from './update-on/update-on.component';

@NgModule({
  declarations: [ AppComponent, AppRoutingModule.components, RequiredTextboxComponent, PhoneTextboxComponent, CamelToTitlePipe, BasicFormComponent, ControlValueAccessorComponent, PhoneTextbookComponent, RequiredTextbookComponent, ReactiveDynamicFormComponent, ReactiveFormComponent, StarterReactiveFormComponent, StarterTemplateFormComponent, UpdateOnComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule, ,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FlexLayoutModule,
    MDBBootstrapModule.forRMDBBootstrapModule.forRoot(),
    /*forms modules */
    BrowserAnimationsModule,

    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,

    RequiredTextboxComponent,
    PhoneTextboxComponent,
    CamelToTitlePipe

],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
  // Don't forget to list AddAnimalComponent as an entry component!
  // This is needed because it is added to the DOM programmatically--
  // it doesn't appear in the template of any other component
  entryComponents: [AppComponent]
})
export class AppModule { }

