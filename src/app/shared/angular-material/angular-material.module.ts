import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';

const materialModules = [
  CommonModule,
  HttpClientModule,
  ReactiveFormsModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatRippleModule,
  MatSelectModule,
  MatSortModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatGridListModule,
  MatDatepickerModule,
  MatDialogModule,
  MatNativeDateModule,
  MatDividerModule,
  MatCheckboxModule,
  HttpClientModule,
  ReactiveFormsModule,
  MatSidenavModule,
  MatSortModule,
  MatListModule,
  MatExpansionModule,
  MatMenuModule,
  MatIconModule,
  MatBadgeModule,
  MatTableModule,
  MatTabsModule
];


@NgModule({

  imports: [
    ...materialModules
  ],
  exports :[
   ...materialModules
  ]
})
export class AngularMaterialModule { }
