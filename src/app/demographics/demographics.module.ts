import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemographicsRoutingModule } from './demographics-routing.module';
import { DemographicsComponent } from './components/demographics/demographics.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
@NgModule({
  declarations: [
    DemographicsComponent
  ],
  imports: [
    CommonModule,
    DemographicsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDatepickerModule
  ]
})
export class DemographicsModule { }
